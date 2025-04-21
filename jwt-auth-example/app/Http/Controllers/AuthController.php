<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
        public function register (Request $request){
            $validator  = Validator::make($request->all(),[
                'name'=>'required|string',
                'email'=>'required|email|unique:users',
                'password'=>'required|string|min:6'
            ]);
            if($validator->fails()){
                return response()->json($validator->errors(),400);
            }

            $user= User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
            ]);

            $token = JWTAuth::fromUser($user);
            return response()->json(compact('user','token'));
        }

        public function login(Request $request){
            $credentials = $request->only('password','email');
            if(!$token = JWTAuth::attempt($credentials)){
                return response()->json(['error'=>'Invalid Credentials'],401);
            }
            return response()->json(compact('token'));
        }

        public function profile(){
            return response()->json(Auth::user());
        }
        public function logout(){
            Auth::logout();
            return response()->json(['message'=>'Successfully logged out']);
        }
}
