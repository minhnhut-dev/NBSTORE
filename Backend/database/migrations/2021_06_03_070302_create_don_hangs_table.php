<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
class CreateDonHangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('don_hangs', function (Blueprint $table) {
            $table->bigIncrements('id');
            // Khoa ngoai
            $table->unsignedBigInteger('hinh_thuc_giao_hangs_id');
            $table->unsignedBigInteger('hinh_thuc_thanh_toans_id');
            $table->unsignedBigInteger('nguoi_dungs_id');
            $table->date('ThoiGianMua');
            $table->string('Tongtien');
            $table->unsignedBigInteger('trang_thai_don_hangs_id');
            // $table->timestamps();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('don_hangs');
    }
}
