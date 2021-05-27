<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSanPhamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('san_phams', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('TenSanPham');
            $table->string('ThongTin');
            $table->string('HangSanXuat');
            $table->string('GiaCu');
            $table->string('GiaKM');
            $table->string('SoLuong');
            $table->string('AnhDaiDien')->nullable();
            $table->text('CauHinh')->nullable();
            // khóa ngoại
            $table->unsignedBigInteger('loai_san_phams_id')->nullable();
            $table->boolean('TrangThai')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('san_phams');
    }
}
