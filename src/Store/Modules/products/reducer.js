const defaultState = [
	{
		id: 1,
		name: 'Iphone 3G',
		price: 500,
		image:
			'https://s2.glbimg.com/d28OI-s5ybcY7P8xtfcXrlvlT90=/800x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/08/07/iphone_apple_3gs_16gb.jpg',
	},
	{
		id: 2,
		name: 'Iphone 3GS',
		price: 400,
		image:
			'https://cf.shopee.com.br/file/aaae979e05bd468c0c540e700d165b9e',
	},
	{
		id: 3,
		name: 'Iphone 4',
		price: 500,
		image:
			'https://m.media-amazon.com/images/I/71Ja9CC9YuL._AC_SY450_.jpg',
	},
	{
		id: 4,
		name: 'Iphone 4S',
		price: 550,
		image:
			'https://http2.mlstatic.com/D_NQ_NP_954492-MLA43773355496_102020-O.jpg',
	},
	{
		id: 5,
		name: 'Iphone 5',
		price: 600,
		image:
			'https://http2.mlstatic.com/D_NQ_NP_737774-MLA43771584499_102020-O.jpg',
	},
	{
		id: 6,
		name: 'Iphone 5S',
		price: 650,
		image:
			'https://http2.mlstatic.com/D_NQ_NP_630775-MLA43755541168_102020-O.jpg',
	}

];

export default function productsReducer(state = defaultState, action) {
	return state;
}
