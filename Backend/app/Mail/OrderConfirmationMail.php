<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;


class OrderConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $order;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($order)
    {
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $id=$this->order[0]->id;
        $order_details = DB::table('chi_tiet_don_hangs')
        ->select('san_phams.TenSanPham','chi_tiet_don_hangs.SoLuong','chi_tiet_don_hangs.DonGia')
        ->join('san_phams','san_phams.id','=','chi_tiet_don_hangs.san_phams_id')
        ->where('chi_tiet_don_hangs.don_hangs_id','=',  $id)
        ->get();
        $order = DB::table('don_hangs')->where('don_hangs.id','=',$this->order[0]->id)
        ->join('trang_thai_don_hangs','don_hangs.trang_thai_don_hangs_id','=','trang_thai_don_hangs.id')
        ->get();
        return $this->view('email.order-confirmation',compact('order_details','order'));
    }
}
