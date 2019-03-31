<?php

namespace App\Helpers;

class ReturnApiData {

    public static function success($message, $code, $data=null)
    {
        return response()->json([
            'message' => $message, 'return' => $data
        ], $code);
    }

    public static function error($message, $code)
    {
        return response()->json([
            'message' => $message
        ], $code);
    }

    public static function catch(\Exception $e)
    {
        if (config('app.debug')) {
            $return = ['message' => $e->getMessage()];
            return response()->json($return, 500);
        }

        $return = ['message' => "Ocorreu um erro, tente novamente!"];
        return response()->json($return, 500);
    }
}
