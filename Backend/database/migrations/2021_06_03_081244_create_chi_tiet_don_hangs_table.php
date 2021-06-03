<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChiTietDonHangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chi_tiet_don_hangs', function (Blueprint $table) {
            $table->unsignedBigInteger('don_hangs_id');
            $table->unsignedBigInteger('san_phams_id');
            $table->integer('SoLuong');
            $table->string('DonGia');
            $table->string('ThanhTien');
            $table->primary(array('don_hangs_id','san_phams_id'));
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
        Schema::dropIfExists('chi_tiet_don_hangs');
    }
}
