<?php

namespace App\Http\Controllers\Api;

use App\Todo;
use App\Helpers\ReturnApiData;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    /**
     * @var Todo
     */
    private $todo;

    public function __construct(Todo $todo)
    {
        $this->todo = $todo;
    }

    public function index()
    {
        $todos = $this->todo->where('user_id', Auth::user()->id)->get();
        return ReturnApiData::success("Listagem dos TODOs realizado com sucesso!", 200, $todos);
    }

    public function store(Request $request)
    {
        try {
            $this->todo->title = $request->title;
            $this->todo->user_id = Auth::user()->id;

            $this->todo->save();

            return ReturnApiData::success("TODO gravado com sucesso!", 201, $this->todo);
        } catch(\Exception $e) {
            return ReturnApiData::catch($e);
        }
    }

    public function destroy(Todo $id)
    {
        try {
            $id->delete();

            return ReturnApiData::success("TODO deletado com sucesso!", 200);
        } catch(\Exception $e) {
            return ReturnApiData::catch($e);
        }
    }
}
