<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\LoaiNguoiDung;
class NguoiDung extends Model
{
    //
    protected $table= 'nguoi_dungs';
    public $timestamp =false;

    public function LoaiNguoiDung()
    {
        return $this->hasOne(LoaiNguoiDung::class);
    }
}
