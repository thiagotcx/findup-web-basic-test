<?php

namespace App\Http\Controllers\Api;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Helpers\ReturnApiData;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    private function getToken(Request $request)
    {
        $http = new Client;
        $response = $http->post(url('oauth/token'), [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => env('APP_TOKEN', 'client-secret'),
                'username' => $request->email,
                'password' => $request->password,
                'scope' => '',
            ],
        ]);

        return json_decode((string) $response->getBody(), true);
    }

    public function register(Request $request)
    {

        try {
            // validate inputs
            $validatedData = $request->validate([
                'email' => 'required|email|unique:users',
                'name' => 'required',
                'password' => 'required|min:8'
            ]);

            // create new user
            $user = User::firstOrNew(['email' => $request->email]);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);

            $user->save();

            // return token-access
            return ReturnApiData::success("Cadastro realizado com sucesso!", 201, $this->getToken($request));
        } catch(\Exception $e) {
            return ReturnApiData::catch($e);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return ReturnApiData::error("Usuário não existe!", 500);
        }

        if(Hash::check($request->password, $user->password)) {
            // return token-access
            return ReturnApiData::success("Login realizado com sucesso!", 200, $this->getToken($request));
        } else {
            return ReturnApiData::error("Senha inválida!", 500);
        }
    }
}
