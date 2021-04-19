<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SanPham extends Model
{
    //
    public $timestamp=false;
    protected $table= 'san_phams';

    public function LoaiSanPham(){
        return $this->belongsTo(LoaiSanPham::class,'id','id');
     }
}
