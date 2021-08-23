<?php
namespace App\Classes;

use Mail;
use App\Mail\OrderConfirmationMail;
use Illuminate\Support\Facades\DB;
class OrderConfirmationService
{

    public function __construct()
    {

    }

    public static function sendOrderConfirmationEmail($order_id)
    {
        $order = DB::table('don_hangs')
        ->select('don_hangs.id','nguoi_dungs.Email')
        ->join('nguoi_dungs','nguoi_dungs.id','=','don_hangs.nguoi_dungs_id')
        ->where('don_hangs.id','=',$order_id)
        ->limit(1)->get();
        if(sizeOf($order)==0) return -1;
        $mailable = new OrderConfirmationMail($order);
        Mail::to($order[0]->Email)->send($mailable);
    }


}
