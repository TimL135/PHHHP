<?php

namespace App\Http\Middleware\Permissions;

use Closure;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;

class IsGroupAdmin
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
        //in ascending order of "specificy": when a club and a field is set as route parameter, authorize according to the club of the field
        //implies that the last parameter is the most specific
        foreach ($request->route()->parameters as $param) {
            if ($param instanceof \App\Models\Group) $targetGroup = $param;
        }
        if ($targetGroup == null) { //middleware specified, but no according route paramter
            if (collect($request->route()->parameters)->each(fn ($param) => is_numeric($param)))
                throw new \Exception("middleware HasClubPermission specified without according route parameter to validate, did you forget to typehint the controller method parameter, misspelled the method, or named the route and method parameters diffently?");
            throw new \Exception("middleware HasClubPermission specified without according route parameter to validate");
        }
        if ($targetGroup->owner_id == Auth::id() || $targetGroup->groupUser(Auth::id())->is_admin)
            return $next($request);
        else return abort(401);
    }
}
