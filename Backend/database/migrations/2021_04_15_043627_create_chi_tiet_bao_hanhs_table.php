<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChiTietBaoHanhsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chi_tiet_bao_hanhs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('NgayBaoHanh');
            $table->date('NgayHenTra');
            $table->string('GhiChu');
            $table->unsignedBigInteger('chi_tiet_hoa_dons_id');// Khóa ngoại
            $table->boolean('TrangThai');
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
        Schema::dropIfExists('chi_tiet_bao_hanhs');
    }
}
