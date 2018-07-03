// Items in our shopping cart
var shoppingCart = [];

// dress items
var dressItems = [
	{
		img: './images/dress/d1.jpg',
		name: 'Blue Dress'
	},
	{
		img: './images/dress/d2.jpg',
		name: 'Topshop Dress'
	},
	{
		img: './images/dress/d3.jpg',
		name: 'Max Tkirt'
	},
	{
		img: './images/dress/d4.jpg',
		name: 'FM black Dress'
	},
	{
		img: './images/dress/d5.jpg',
		name: 'Warm black Skirt'
	}
];

// top items
var topItems = [
	{
		img: './images/tops/t1.jpg',
		name: 'Freepeople lace Top'
	},
	{
		img: './images/tops/t2.jpg',
		name: 'Lace Tank'
	},
	{
		img: './images/tops/t3.jpg',
		name: 'Black Top'
	},
	{
		img: './images/tops/t4.jpg',
		name: 'Orange Sweather'
	},
	{
		img: './images/tops/t5.jpg',
		name: 'Black Jacket'
	}
];

// Swimsuite items
var swimsuiteItems = [
	{
		img: './images/swimsuite/s1.jpg',
		name: 'Red point Bikini'
	},
	{
		img: './images/swimsuite/s2.jpg',
		name: 'Pink point Bikini'
	},
	{
		img: './images/swimsuite/s3.jpg',
		name: 'Purple Swimsuite'
	},
	{
		img: './images/swimsuite/s4.jpg',
		name: 'Red Bikini'
	},
	{
		img: './images/swimsuite/s5.jpg',
		name: 'Red Swimsuite'
	}
];


// Add click handlers to our category buttons
$('#dress').click(function() {
	addShoppingItems('dress');
});

$('#top').click(function() {
	addShoppingItems('top');
});

$('#swimsuite').click(function() {
	addShoppingItems('swimsuite');
});

// Add click handlers to each shopping item
$('#shopping-items').on('click', '.shopping-item', function() {
	var itemName = $(this).find('p').text();
	addItemToShoppingCart(itemName);
});


// Add shopping items to our page
function addShoppingItems(category) {
	// first, clear out all items I am currently showing
	clearShoppingItems();

	var myItems;
	switch(category) {
		case 'dress':
			myItems = dressItems;
			break;
		case 'top':
			myItems = topItems;
			break;
		case 'swimsuite':
			myItems = swimsuiteItems;
			break;
		default:
	}

	var newList = $('<ul>');
	for(var i = 0; i < myItems.length; i++) {
		var currentItem = myItems[i];

		newList.append(
			`<li class="shopping-item">
				<img src="${currentItem.img}">
				<p>${currentItem.name}</p>
			</li>`);
	}

	$('#shopping-items').append(newList);
}

// Clear our current shopping-items
function clearShoppingItems() {
	$('#shopping-items').empty();
}

// Add item to shopping cart
function addItemToShoppingCart(item) {
	$('#shopping-cart ul').append(`
		<li>
			${item}
		</li>
	`);
}
// empty item from shopping cart
$('#shopping-cart ul').on('click', 'newList', function(){
    $("li").click(function(){
        $(this).hide(itemName);
    });
});
