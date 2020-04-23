var config = {
    style: 'mapbox://styles/tanhailun/ck8i9cxfu05pp1iqpcsnjjfmx',
    accessToken: 'pk.eyJ1IjoidGFuaGFpbHVuIiwiYSI6ImNrN3h5NDVjcDAweGYzbG83YTdvcjhjYmIifQ.CMP3ZyJYJOCVhum1Mu3vmw',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title - greenville zoomed out',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-91.05360, 33.40159],
                zoom: 9.29,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title - 200 washington ave',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-91.06337, 33.41345],
                zoom: 15.82,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [// {
                //     layer: 'layer-name',
                //     opacity: 1
                // }],
            ],    
            onChapterExit: [// {
                //     layer: 'layer-name',
                //     opacity: 0
                // }]
            ]       
        }, 
        {
            id: 'other-identifier1',
            title: 'third Title - 601 nelson ave',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-91.05505, 33.41444],
                zoom: 15.00,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'other-identifier2',
            title: 'fourth Title - 200 eureka street',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
               center: [-91.04613, 33.40713],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'other-identifier3',
            title: 'fifth title - chinese cementary',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
               center: [-91.0570607,33.381007,],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier4',
            title: 'six title - first baptist church',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-91.06150, 33.40924],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },  




    ]



};
