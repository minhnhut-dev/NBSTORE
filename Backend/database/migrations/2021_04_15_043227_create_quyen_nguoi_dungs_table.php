<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuyenNguoiDungsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quyen_nguoi_dungs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('tai_khoan_nguoi_dungs_id');
            $table->string('TenQuyen');
            $table->string('ChiTietQuyen')->nullable();
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
        Schema::dropIfExists('quyen_nguoi_dungs');
    }
}
