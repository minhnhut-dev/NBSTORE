<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SanPham;
class LoaiSanPham extends Model
{
    //
    public $timestamp= false;
    protected $fillable=['TenLoai'];

    public function SanPham()
    {
        return $this->hasMany(SanPham::class);
    }
}
