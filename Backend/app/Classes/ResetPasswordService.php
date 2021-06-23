<?php
namespace App\Classes;

use Mail;
use App\UserResetPassword;
use App\Mail\UserResetPasswordEmail;
use App\NguoiDung;
use Illuminate\Support\Facades\Hash;

class ResetPasswordService
{
    protected $resendAfter = 24; // Sẽ gửi lại mã xác thực sau 24h nếu thực hiện sendActivationMail()
    protected $userResetPassword;

    public function __construct(UserResetPassword $userResetPassword)
    {
        $this->userResetPassword = $userResetPassword;
    }

    public function sendResetPasswordMail($user)
    {
        $token = $this->userResetPassword->createResetPassword($user);
        $user->reset_password_link = route('user.reset-password', $token);
        $mailable = new UserResetPasswordEmail($user);
        Mail::to($user->Email)->send($mailable);
    }

    public function ResetPasswordUser($token,$password)
    {
        $reset_password = $this->userResetPassword->getResetPasswordByToken($token);
        if ($reset_password === null) return null;
        $user = NguoiDung::find($reset_password->user_id);

        $user->password= Hash::make($password);
        $user->save();
        $this->userResetPassword->deleteResetPassword($token);
        return $user;
    }

    // private function shouldSend($user)
    // {
    //     $activation = $this->userActivation->getResetPassword($user);
    //     return $activation === null || strtotime($activation->created_at) + 60 * 60 * $this->resendAfter < time();
    // }

}
