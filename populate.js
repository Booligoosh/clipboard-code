var imgOptions = ['https://images.unsplash.com/photo-1505259341540-280be642cfaa?auto=format&fit=crop&w=634&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1470274038469-958113db2384?auto=format&fit=crop&w=675&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?auto=format&fit=crop&w=1534&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1501500070391-c19e014dc293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4d8836c3a02c70f2aecae0b5789ec464',
                  'https://images.unsplash.com/photo-1496229491455-e2b6b8595499?auto=format&fit=crop&w=1468&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1494&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1554&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1387&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=1489&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1496405302114-ca20b971568b?auto=format&fit=crop&w=1500&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&w=1500&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1502652746883-ff750e18ccfd?auto=format&fit=crop&w=1576&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1445546857131-5fc39d1c51f0?auto=format&fit=crop&w=1488&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
                  'https://images.unsplash.com/photo-1477120128765-a0528148fed2?auto=format&fit=crop&w=1502&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
                 ];
var columns = document.querySelectorAll('.photo-grid .column');
for (var i = 0; i < columns.length; i++) {
    var col = columns[i];
    for (var l = 0; l < 3; l++) {
        var img = imgOptions[Math.floor(Math.random() * imgOptions.length)];
        imgOptions.splice(imgOptions.indexOf(img),1);
        col.innerHTML += '<a class="photo-card" href="#item"><img src="' + img + '"><div class="img-caption"><h3>My title</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed rutrum quam, vitae egestas arcu. Nunc sollicitudin leo dapibus, posuere ipsum in, dictum purus.</p></div></a>';
    }
}