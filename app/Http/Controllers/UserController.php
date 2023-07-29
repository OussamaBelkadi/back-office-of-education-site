<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Gate;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;

use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
   public function signup(SignupRequest $request){
    $data = $request->validated();
    $user = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => bcrypt($data['password']),
        'role' => $data['role']
    ]);

        $token  =$user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
   }

   public function login(LoginRequest $request){

        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if(!Auth::attempt($credentials, $request)){
            return response(['error'=> 'The Provided credentiel are not correct'], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);

   }

   public function logout(Request $request){

        $user = Auth::user();
        $user->currentaccessToken()->delete();

        return response([
            'success' => ' Logout successfully'
        ], 201);

   }


   
   
   
   
   
   
   
    // /**
    //  * Remove the specified resource from storage.
    //  */
    // public function destroy(string $id)
    // {
    //     //
    // }
    // public function register(Request $request)
    // {
    //     if(Gate::denies('create')){
    //         return response()->json(['error'=>'Unauthorize'],402);
    //     }
    //     // $request->validate([
    //     //     "name" => "required | string | unique",
    //     //     "email" => "required | email",
    //     //     "password" => "required | min:8",
    //     //     "role" => "required | string"
    //     // ]);

    //     $user = new User;
    //     $user->name = $request->name;
    //     $user->email = $request->email;
    //     $user->password = Hash::make($request->password);
    //     $user->role = $request->role;
    //     if($user->save()){
    //     return response()->json(["message"=>"New user is created"]);
    //     }else{
    //         return response()->json(["message"=>"The user is not created"]);
    //     }
    // }

    // public function login(Request $request){
        
         
    //    if(!Auth::attempt($request->only('email', 'password'))){
    
    //     return response()->json(["message"=>"the authenticated is not attempt"]);
    //    }
    //    $user = Auth::user();
    //    $token = $user->createToken("token")->plainTextToken;
    //    $cookies = cookie('jwt', $token, 60 * 24 );
    //     return response()->json([
    //         "message"=>"success",$token
    //     ])->withCookie($cookies);
    // }
    // /**
    //  * Display the specified resource.
    //  */
    // public function show(string $id, Request $request)
    // {
    //     $email = $request->email;
    //     $password = $request->password;
    //     $user = User::where('email', $email)->first();
    //     if(!$user){
    //         return response()->json(["message"=>"the user is not exist", 401]);
    //     }
    // }
    // public function logout(){
    //     Auth::user()->currentAccessToken()->delete();
    //     return response()->json(["success" => "operation logout is completed"]);
    // }

}
