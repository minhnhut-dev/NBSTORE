<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LoaiSanPham extends Model
{
    //
    public $timestamp= false;
    protected $table= 'loai_san_phams';

    public function SanPham()
    {
        return $this->hasMany(SanPham::class);
    }
}
