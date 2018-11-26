export const overworld = {
	image: 'img/tiles.png',
	width: 16,
	height: 16,
	
	tiles: [
    	{
    		name: 'ground',
    		index: [0, 0]
    	},
    	{
    		name: 'sky',
    		index: [48, 368]
    	},
    	{
            name: "chocolate",
            index: [0, 16]
        },
        {
            name: "bricks",
            index: [16, 0]
        },
        {
            name: "chance",
            index: [384, 0]
        },
        {
            name: "chance-1",
            index: [384, 0]
        },
        {
            name: "chance-2",
            index: [400, 0]
        },
        {
            name: "chance-3",
            index: [416, 0]
        },
        {
        	name: 'pipe-top-left',
        	index: [0, 128]
        },
        {
        	name: 'pipe-top-right',
        	index: [16, 128]
        },
        {
        	name: 'pipe-bottom-left',
        	index: [0, 144]
        },
        {
        	name: 'pipe-bottom-right',
        	index: [16, 144]
        },
        {
        	name: 'cloud1-1',
        	index: [0, 320]
        },
        {
        	name: 'cloud1-2',
        	index: [16, 320]
        },
        {
        	name: 'cloud1-3',
        	index: [32, 320]
        },
        {
        	name: 'cloud2-1',
        	index: [0, 336]
        },
        {
        	name: 'cloud2-2',
        	index: [16, 336]
        },
        {
        	name: 'cloud2-3',
        	index: [32, 336]
        },
        {
        	name: 'mountain-left',
        	index: [128, 128]
        },
        {
        	name: 'mountain-left-dot',
        	index: [128, 144]
        },
        {
        	name: 'mountain-right',
        	index: [160, 128]
        },
        {
        	name: 'mountain-right-dot',
        	index: [160, 144]
        },
        {
        	name: 'mountain-top',
        	index: [144, 128]
        },
        {
        	name: 'mountain-block',
        	index: [144, 144]
        }
        ],

        animations: [
        {
        	name: 'chance',
        	frameLen: 0.45,
        	frames: [
        		'chance-1',
        		'chance-1',
        		'chance-2',
        		'chance-3',
        		'chance-2'
        	]
        }
    ]
};