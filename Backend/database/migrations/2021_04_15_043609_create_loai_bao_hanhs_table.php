<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoaiBaoHanhsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loai_bao_hanhs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('TenLoaiBaoHanh');
            $table->date('ThoiGianXuLy');
            $table->decimal('Gia');
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
        Schema::dropIfExists('loai_bao_hanhs');
    }
}
