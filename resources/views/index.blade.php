@extends('layouts.main')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="weather">
                <img class="main-image" src="{{asset('/images/bryansk.jpg')}}" />
                <p class="text-images">Время в Брянске составляет: 23:33</p>
            </div>
        </div>
    </div>
@endsection