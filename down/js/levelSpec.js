export const levelSpec = {
	layers: [
		{
			tiles: [
				{
					name: 'sky',
					ranges: [
						[0, 212, 0, 13]
					]
				},
				{
					name: 'ground',
					type: 'ground',
					ranges: [
						[0, 212, 13, 2]
					]
				},
				{
					name: 'sky',
					ranges: [
						[75, 2, 13, 2],
						[92, 2, 13, 2],
						[157, 2, 13, 2]
					]
				},
			]
		},
		{
			tiles: [
				{
					pattern: 'mountainbig',
					ranges: [
						[56, 10],
						[102, 10],
						[150, 10]
					]					
				},
				{
					pattern: 'mountainsmall',
					ranges: [
						[23, 11],
						[70, 11],
						[120, 11],
						[185, 11]
					]					
				},
				{
					pattern: 'cloud',
					ranges: [
						[4, 4],
						[9, 4]
					]
				},
				{
					name: 'ground',
					type: 'ground',
					ranges: [
						[5, 3, 9],
						[29, 5],
						[5, 7, 9],
						[12, 6, 11],
						[2, 11],
						[10, 2, 10],
						[10, 2, 10],
						[9, 1, 0, 7]
					]
				},
				{
					pattern: 'pipe2h',
					type: 'ground',
					ranges: [
			    		[35, 11],
			    		[167, 11],
			    		[182, 11]
					]
				},
				{
					pattern: 'pipe3h',
					type: 'ground',
					ranges: [
			        [45, 10]
					]
				},
				{
					pattern: 'pipe4h',
					type: 'ground',
					ranges: [
						[53, 9],
						[64, 9]
					]
				},
				{
					name: 'bricks',
					type: 'ground',
					ranges: [
						[27, 5, 9],
						[83, 3, 9],
						[86, 6, 5],
						[96, 3, 5],
						[99, 9],
						[105, 2, 9],
						[123, 5],
						[126, 3, 5],
						[132, 4, 5],
						[133, 2, 9],
						[171, 4, 9]
					]
				},
				{
					name: 'chance',
					type: 'ground',
					ranges: [
						[2, 2],
						[23, 9],
						[28, 9],
						[30, 9],
						[29, 5],
						[84, 9],
						[99, 5],
						[114, 5],
						[111, 9],
						[114, 9],
						[117, 9],
						[133, 2, 5],
						[173, 9]
					]
				},
				{
					name: 'chocolate',
					type: 'ground',
					ranges: [
						[141, 1, 9],
						[140, 2, 10],
						[139, 3, 11],
						[138, 4, 12],
						[144, 1, 9],
						[144, 2, 10],
						[144, 3, 11],
						[144, 4, 12],
						[155, 2, 9],
						[154, 3, 10],
						[153, 4, 11],
						[152, 5, 12],
						[159, 1, 9],
						[159, 2, 10],
						[159, 3, 11],
						[159, 4, 12],
						[191, 2, 5],
						[190, 3, 6],
						[189, 4, 7],
						[188, 5, 8],
						[187, 6, 9],
						[186, 7, 10],
						[185, 8, 11],
						[184, 9, 12]
					]
				},
			]
		}
	],
	
	pattern: {
		pipetop: {
			tiles: [
				{
					name: 'pipe-top-left',
    				type: 'ground',
    				ranges: [[0, 0]]
				},
				{
    				name: 'pipe-top-right',
    				type: 'ground',
    				ranges: [[1, 0]]
    			}    				
			]
		},
		pipebottom: {
			tiles: [
		    	{
    				name: 'pipe-bottom-left',
    				type: 'ground',
    				ranges: [[0, 1]]
    			},
    			{
  					name: 'pipe-bottom-right',
    				type: 'ground',
    				ranges: [[1, 1]]
    			}
			]
		},
		pipe2h: {
			tiles: [
				{
					pattern: 'pipetop',
					ranges: [[0, 0]]
				},
				{
					pattern: 'pipebottom',
					ranges: [[0, 0]]
				}
			]
		},
		pipe3h: {
			tiles: [
				{
					pattern: 'pipetop',
					ranges: [[0, 0]]
				},
				{
					pattern: 'pipebottom',
					ranges: [[0, 0], [0, 1]]
				}
			]
		},
		pipe4h: {
			tiles: [
				{
					pattern: 'pipetop',
					ranges: [[0, 0]]
				},
				{
					pattern: 'pipebottom',
					ranges: [[0, 0], [0, 1], [0, 2]]
				}
			]
		},
		cloud: {
			tiles: [
				{
					name: 'cloud1-1',
					ranges: [[0, 0]]
				},
				{
					name: 'cloud1-2',
					ranges: [[1, 0]]
				},
				{
					name: 'cloud1-3',
					ranges: [[2, 0]]
				},
				{
					name: 'cloud2-1',
					ranges: [[0, 1]]
				},
				{
					name: 'cloud2-2',
					ranges: [[1, 1]]
				},
				{
					name: 'cloud2-3',
					ranges: [[2, 1]]
				}
			]
		},
		mountainsmall: {
			tiles: [
				{
					name: 'mountain-top',
					ranges: [[1, 0]]
				},
				{
					name: 'mountain-left',
					ranges: [[0, 1]]
				},
				{
					name: 'mountain-right',
					ranges: [[2, 1]]
				},
				{
					name: 'mountain-left-dot',
					ranges: [[1, 1]]
				}
			]
		},
		mountainbig: {
			tiles: [
				{
					name: 'mountain-top',
					ranges: [[1, 0]]
				},
				{
					name: 'mountain-left',
					ranges: [[0, 1],[-1, 2]]
				},
				{
					name: 'mountain-right',
					ranges: [[2, 1],[3, 2]]
				},
				{
					name: 'mountain-left-dot',
					ranges: [[0, 2],[1, 1]]
				},
				{
					name: 'mountain-right-dot',
					ranges: [[2, 2]]
				},
				{
					name: 'mountain-block',
					ranges: [[1, 2]]
				}
			]
		}
	}
};
