<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class UserResetPassword extends Model
{
    protected $table = 'user_reset_passwords';

    protected function getToken()
    {
        return hash_hmac('sha256', Str::random(40), config('app.key'));
    }

    public function createResetPassword($user)
    {

        $activation = $this->getResetPassword($user);

        if (!$activation) {
            return $this->createToken($user);
        }
        return $this->regenerateToken($user);

    }

    private function regenerateToken($user)
    {

        $token = $this->getToken();
        UserResetPassword::where('user_id', $user->id)->update([
            'reset_password_code' => $token,
            'created_at' => new Carbon()
        ]);
        return $token;
    }

    private function createToken($user)
    {
        $token = $this->getToken();
        UserResetPassword::insert([
            'user_id' => $user->id,
            'reset_password_code' => $token,
            'created_at' => new Carbon()
        ]);
        return $token;
    }

    public function getResetPassword($user)
    {
        return UserResetPassword::where('user_id', $user->id)->first();
    }

    public function getResetPasswordByToken($token)
    {
        return UserResetPassword::where('reset_password_code', $token)->first();
    }

    public function deleteResetPassword($token)
    {
        UserResetPassword::where('reset_password_code', $token)->delete();
    }
}