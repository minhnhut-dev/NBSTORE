<?php

namespace App\Exports;
use App\DonHang;
use Maatwebsite\Excel\Concerns\FromCollection;
use App\Classes\SalesService;
use App\Classes\Revenue;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadings;
class RevenueMonthExport implements FromCollection, WithHeadings
{
    protected $max_day;
    protected $year;
    protected $month;
    function __construct($day, $month, $year)
    {
        $this->max_day = $day;
        $this->year = $year;
        $this->month = $month;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {

        $revenue =SalesService::revenueEachDayByMonth($this->max_day,$this->month, $this->year);
        $orders =SalesService::numberOrdersPerDayByMonth($this->max_day,$this->month, $this->year);
        $collection = new Collection();
        $i=0;
        foreach ($revenue as $item){
            $item["orders"]=$orders[$i]["orders"];
            $collection->push($item);
            $i++;
        } 
        return $collection;
    }
    public function headings(): array
    {
        return [
            'Timestamp',
            'Ngày',
            'Doanh thu',
            'Số lượng đơn'
        ];
    }
    public function map($bill): array
    {
        return [
        ];
    }
}
