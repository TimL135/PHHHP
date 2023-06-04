<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ], ["email.required" => 'CREDENTIALS_INVALID', "email.email" => 'CREDENTIALS_INVALID', "password.required" => 'CREDENTIALS_INVALID']);

        $user = User::where('email', $request->email)->first();
        //return Hash::check($request->password, $user->password)?"true":"false";


        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['CREDENTIALS_INVALID'],
            ]);
        }

        $tokenExists = $user->tokens()->where('name', $user->name)->first();
        if ($tokenExists) $tokenExists->delete();
        $user->createToken($user->name)->plainTextToken;

        return redirect()->route('dashboard');
    }
    // public function __construct()
    // {
    //     $this->middleware('guest')->except('logout');
    // }
}
