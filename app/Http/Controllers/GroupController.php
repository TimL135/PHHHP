<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GroupController extends Controller
{
    public function index(Request $request)
    {
        $validated = $request->validate([
            "search" => "nullable|string",
        ]);
        return Inertia::render('Groups', [
            "groups" => Auth::user()->groups()->with(["tasks", "users"])->get(),
            "searchGroups" => $request->search ?  Group::withoutUser(Auth::user())
                ->where(function (Builder $query) use ($validated) {
                    $query->where("name", "like", "%" . $validated["search"] . "%")
                        ->orWhere("id", "like", "%" . STR::afterLast($validated["search"], "#")  . "%");
                })
                ->where("is_public", "=", 1)
                ->get()
                : []
        ]);
    }
    public function addGroup(Request $request)
    {
        $validated = $request->validate([
            "name" => "required|string|unique:groups,name",
        ]);
        $array = [...$validated, 'owner_id' => Auth::id()];
        Group::create($array);
        return to_route("groups");
    }
    public function joinGroup(Request $request, Group $group)
    {
        $group->users()->syncWithoutDetaching(Auth::user());
        return to_route("groups");
    }
    public function leaveGroup(Request $request, Group $group)
    {
        $group->users()->detach(Auth::user());
        return to_route("groups");
    }
    public function editSettingsGroup(Request $request, Group $group)
    {
        $validated = $request->validate([
            "name" => "required|string",
            "is_public" => "required|boolean"
        ]);
        $group->fill($validated);
        $group->save();
        return to_route("groups");
    }
}
