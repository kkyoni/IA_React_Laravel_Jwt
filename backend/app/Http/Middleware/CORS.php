<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $response = $next($request);
        return $response->header('Cache-Control', 'nocache, no-store, max-age=0, must-revalidate')
            ->header('Pragma', 'no-cache')
            ->header('Expires', 'Fri, 01 Jan 1990 00:00:00 GMT');
        // header("Access-Control-Allow-Origin: *");

        // // ALLOW OPTIONS METHOD
        // $headers = [
        //     'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
        //     'Access-Control-Allow-Headers'=> 'Origin, X-Requested-With, Content-Type, Accept'
        // ];
        // if($request->getMethod() == "OPTIONS") {
        //     // The client-side application can set only headers allowed in Access-Control-Allow-Headers
        //     return Response::make('OK', 200, $headers);
        // }

        // $response = $next($request);
        // foreach($headers as $key => $value)
        //     $response->header($key, $value);
        // return $response;
    }
}
