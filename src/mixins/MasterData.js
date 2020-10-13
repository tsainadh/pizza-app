const ORDERED			= 0;
const PREPARING			= 1;
const READY_TO_SERVE	= 2;
const items = {
				item1: 'Double Paneer Supreme',
				item2: 'Garlic Bread Stix',
				item3: 'Choco Volcano Cake',
				item4: 'Masala Lemonade',
			};
export default {
	data() {
		return {
			order_statuses	:[
				{title:'Ordered Received',class:'ordered'},
				{title: 'Preparing',class:'preparing'},
				{title: 'Ready to serve',class: 'ready-to-serve'}
			],
			orders:[
				{
					id:'0001',
					customer_name: 'Sainadh',
					items: [items.item1,items.item2,items.item3,items.item4],
					status: ORDERED,
					total_amount: 400,
					image: require('@/assets/images/pizza1.jpg'),
				},
				{
					id:'0002',
					customer_name:'Ramesh',
					items: [items.item1,items.item2],
					status: ORDERED,
					total_amount: 200,
					image: require('@/assets/images/pizza2.jpg'),
				},
				{
					id:'0003',
					customer_name: 'Suresh',
					items: [items.item1,items.item3],
					status: ORDERED,
					total_amount: 400,
					image: require('@/assets/images/pizza3.jpg'),
				},
				{
					id:'0004',
					customer_name:'Venky',
					items: [items.item1,items.item2],
					status: PREPARING,
					total_amount: 200,
					image: require('@/assets/images/pizza1.jpg'),
				},
				{
					id:'0005',
					customer_name:'Arun',
					items: [items.item1,items.item2],
					status: READY_TO_SERVE,
					total_amount: 200,
					image: require('@/assets/images/pizza4.jpg'),
				},
			],
		}
	}
}
