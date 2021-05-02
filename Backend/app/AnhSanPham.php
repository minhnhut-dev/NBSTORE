<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SanPham;
class AnhSanPham extends Model
{
    //
    public $timestamp = false;
    protected $table= 'anh_san_phams';

    public function SanPham()
    {
        return $this->belongsTo(SanPham::class);
    }
}
