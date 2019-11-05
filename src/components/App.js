import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Artists from '../components/artists/Artists';

const App = () => {
  const arr = [
    {
      'id': 'bdacc37b-8633-4bf8-9dd5-4662ee651aec',
      'type': 'Group',
      'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
      'score': 100,
      'name': 'Slayer',
      'sort-name': 'Slayer',
      'country': 'US',
      'area': {
        'id': '489ce91b-6658-3307-9877-795b68554c98',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United States',
        'sort-name': 'United States',
        'life-span': {
          'ended': null
        }
      },
      'begin-area': {
        'id': 'b0fa1b5d-382d-4abd-989e-ae9bf9e2f34b',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Huntington Park',
        'sort-name': 'Huntington Park',
        'life-span': {
          'ended': null
        }
      },
      'end-area': {
        'id': 'c97f3307-fc87-481c-8635-d00a990efb7c',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Inglewood',
        'sort-name': 'Inglewood',
        'life-span': {
          'ended': null
        }
      },
      'disambiguation': 'US thrash metal band',
      'isnis': [
        '0000000115404735'
      ],
      'life-span': {
        'begin': '1981',
        'end': '2019-11-30',
        'ended': true
      },
      'tags': [
        {
          'count': 0,
          'name': '80s'
        },
        {
          'count': 0,
          'name': 'heavy metal'
        },
        {
          'count': 0,
          'name': '90s'
        },
        {
          'count': 13,
          'name': 'thrash metal'
        },
        {
          'count': 1,
          'name': 'metal'
        },
        {
          'count': 0,
          'name': 'american'
        },
        {
          'count': 1,
          'name': 'speed metal'
        },
        {
          'count': 1,
          'name': '80s thrash metal'
        },
        {
          'count': 0,
          'name': '00s'
        },
        {
          'count': 0,
          'name': 'rock and indie'
        },
        {
          'count': 0,
          'name': 'classic metal'
        },
        {
          'count': 0,
          'name': '10s'
        },
        {
          'count': 1,
          'name': 'classic thrash metal'
        },
        {
          'count': 1,
          'name': 'thrash-metal'
        }
      ]
    },
    {
      'id': '8869f326-16e0-4a88-aa8a-bc6fd4db2fe0',
      'type': 'Group',
      'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
      'score': 86,
      'name': 'Slayer',
      'sort-name': 'Slayer',
      'country': 'US',
      'area': {
        'id': '489ce91b-6658-3307-9877-795b68554c98',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United States',
        'sort-name': 'United States',
        'life-span': {
          'ended': null
        }
      },
      'disambiguation': 'US hard rock band',
      'life-span': {
        'ended': true
      }
    },
    {
      'id': '72de5171-38cf-4734-bc8a-6ac374dea523',
      'type': 'Person',
      'type-id': 'b6e035f4-3ce9-331c-97df-83397230b0df',
      'score': 86,
      'name': 'Slayer',
      'sort-name': 'Slayer',
      'gender': 'male',
      'country': 'GB',
      'area': {
        'id': '8a754a16-0027-3a29-b6d7-2b40ea0481ed',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United Kingdom',
        'sort-name': 'United Kingdom',
        'life-span': {
          'ended': null
        }
      },
      'disambiguation': 'UK grime MC',
      'life-span': {
        'ended': null
      },
      'tags': [
        {
          'count': 1,
          'name': 'mc'
        },
        {
          'count': 1,
          'name': 'uk'
        },
        {
          'count': 1,
          'name': 'grime'
        }
      ]
    },
    {
      'id': '36134464-6e24-4989-bcf7-89011124286b',
      'type': 'Person',
      'type-id': 'b6e035f4-3ce9-331c-97df-83397230b0df',
      'score': 75,
      'name': 'MiC Slayer',
      'sort-name': 'Slayer, Mic',
      'gender': 'male',
      'area': {
        'id': 'e24de96f-81de-4021-8af3-1b656b6b1e42',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Mumbai',
        'sort-name': 'Mumbai',
        'life-span': {
          'ended': null
        }
      },
      'begin-area': {
        'id': 'e24de96f-81de-4021-8af3-1b656b6b1e42',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Mumbai',
        'sort-name': 'Mumbai',
        'life-span': {
          'ended': null
        }
      },
      'disambiguation': 'Indian Rapper',
      'life-span': {
        'begin': '1992-03-28',
        'ended': null
      },
      'aliases': [
        {
          'sort-name': 'Slayer',
          'name': 'Slayer',
          'locale': null,
          'type': null,
          'primary': null,
          'begin-date': null,
          'end-date': null
        },
        {
          'sort-name': 'mic',
          'name': 'MiC',
          'locale': null,
          'type': null,
          'primary': null,
          'begin-date': null,
          'end-date': null
        },
        {
          'sort-name': 'chaitanya jadhav',
          'name': 'chaitanya jadhav',
          'locale': null,
          'type': null,
          'primary': null,
          'begin-date': null,
          'end-date': null
        }
      ],
      'tags': [
        {
          'count': 1,
          'name': 'micslyer'
        },
        {
          'count': 1,
          'name': 'chaitanyajahav'
        },
        {
          'count': 1,
          'name': 'chaitanya'
        },
        {
          'count': 1,
          'name': 'miclayer'
        },
        {
          'count': 1,
          'name': 'slayer'
        },
        {
          'count': 1,
          'name': 'mic'
        }
      ]
    },
    {
      'id': 'a8ce563e-067f-4b84-8e42-30a3eba3f10d',
      'type': 'Person',
      'type-id': 'b6e035f4-3ce9-331c-97df-83397230b0df',
      'score': 74,
      'name': 'Titan Slayer',
      'sort-name': 'Titan Slayer',
      'gender': 'male',
      'area': {
        'id': 'f310740c-ad62-48c0-839b-e86581b9f464',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Moskva',
        'sort-name': 'Moskva',
        'life-span': {
          'ended': null
        }
      },
      'begin-area': {
        'id': 'f310740c-ad62-48c0-839b-e86581b9f464',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Moskva',
        'sort-name': 'Moskva',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'ended': null
      }
    },
    {
      'id': '46c550a2-009c-4460-8a63-e3ca21f0ac18',
      'type': 'Group',
      'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
      'score': 74,
      'name': 'S.A. Slayer',
      'sort-name': 'S.A. Slayer',
      'area': {
        'id': 'a6f7157a-bfab-49e8-a22b-240ade4552ca',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'San Antonio',
        'sort-name': 'San Antonio',
        'life-span': {
          'ended': null
        }
      },
      'begin-area': {
        'id': 'a6f7157a-bfab-49e8-a22b-240ade4552ca',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'San Antonio',
        'sort-name': 'San Antonio',
        'life-span': {
          'ended': null
        }
      },
      'end-area': {
        'id': 'a6f7157a-bfab-49e8-a22b-240ade4552ca',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'San Antonio',
        'sort-name': 'San Antonio',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'begin': '1982',
        'end': '1984',
        'ended': true
      }
    },
    {
      'id': 'cf3d7570-7fc5-445d-b4ac-0cc98b113ffb',
      'score': 74,
      'name': 'JR Slayer',
      'sort-name': 'Slayer, JR',
      'area': {
        'id': '1f40c6e1-47ba-4e35-996f-fe6ee5840e62',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Los Angeles',
        'sort-name': 'Los Angeles',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'ended': null
      }
    },
    {
      'id': '8d45e3f0-f7fb-422b-8750-5313d2b3f2e5',
      'score': 73,
      'name': 'Edge Slayer',
      'sort-name': 'Edge Slayer',
      'area': {
        'id': '3c5a0506-d852-4e96-8d1e-d8126328f3be',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'New Orleans',
        'sort-name': 'New Orleans',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'ended': null
      }
    },
    {
      'id': '951202ef-f531-41ac-8cf7-369840159efe',
      'type': 'Group',
      'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
      'score': 73,
      'name': 'Dog Slayer',
      'sort-name': 'Dog Slayer',
      'country': 'CN',
      'area': {
        'id': '7c81bb69-a99b-3487-b6d4-0f76d7a29ca0',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'China',
        'sort-name': 'China',
        'life-span': {
          'ended': null
        }
      },
      'disambiguation': 'heavy metal band from China, aka 狗屠',
      'life-span': {
        'begin': '2012',
        'ended': null
      },
      'tags': [
        {
          'count': 1,
          'name': 'heavy metal'
        }
      ]
    },
    {
      'id': '6039cd36-f2ce-4b62-931e-2847d8a37a94',
      'type': 'Person',
      'type-id': 'b6e035f4-3ce9-331c-97df-83397230b0df',
      'score': 73,
      'name': 'Kinseta Slayer',
      'sort-name': 'Slayer Kinseta',
      'gender': 'male',
      'area': {
        'id': '90eba4c7-23e3-4b8b-bf57-96a70fb4e106',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Fayetteville',
        'sort-name': 'Fayetteville',
        'life-span': {
          'ended': null
        }
      },
      'begin-area': {
        'id': 'aec173a2-0f12-489e-812b-7d2c252e4b62',
        'type': 'Subdivision',
        'type-id': 'fd3d44c5-80a1-3842-9745-2c4972d35afa',
        'name': 'South Carolina',
        'sort-name': 'South Carolina',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'begin': '1995-10-17',
        'ended': null
      }
    },
    {
      'id': 'a855f4f8-73ae-41c0-912e-2dd9c54ee2d8',
      'type': 'Group',
      'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
      'score': 73,
      'name': 'Leo Slayer',
      'sort-name': 'Leo Slayer',
      'country': 'GB',
      'area': {
        'id': '8a754a16-0027-3a29-b6d7-2b40ea0481ed',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United Kingdom',
        'sort-name': 'United Kingdom',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'ended': null
      },
      'aliases': [
        {
          'sort-name': 'Leoslayer',
          'name': 'Leoslayer',
          'locale': null,
          'type': null,
          'primary': null,
          'begin-date': null,
          'end-date': null
        }
      ]
    },
    {
      'id': '91d63cb0-fb6d-48f7-8f0d-92f3a28796fd',
      'type': 'Group',
      'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
      'score': 73,
      'name': 'Princess Slayer',
      'sort-name': 'Princess Slayer',
      'country': 'GB',
      'area': {
        'id': '8a754a16-0027-3a29-b6d7-2b40ea0481ed',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United Kingdom',
        'sort-name': 'United Kingdom',
        'life-span': {
          'ended': null
        }
      },
      'begin-area': {
        'id': '8a754a16-0027-3a29-b6d7-2b40ea0481ed',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United Kingdom',
        'sort-name': 'United Kingdom',
        'life-span': {
          'ended': null
        }
      },
      'disambiguation': 'Active in UK 2013 - Present',
      'life-span': {
        'begin': '2012-01-10',
        'ended': null
      }
    },
    {
      'id': '6737de62-bd11-433a-8aa4-42f8c6edc771',
      'score': 73,
      'name': 'Patrick Slayer',
      'sort-name': 'Patrick Slayer',
      'life-span': {
        'ended': null
      }
    },
    {
      'id': '0efb1df1-c704-4911-a5c8-8e39c931947c',
      'score': 73,
      'name': 'Hog Slayer',
      'sort-name': 'Hog Slayer',
      'life-span': {
        'ended': null
      }
    },
    {
      'id': '07debdc9-82ac-416e-8916-c92b9da17928',
      'score': 73,
      'name': 'BIT_SLAYER',
      'sort-name': 'BIT_SLAYER',
      'area': {
        'id': '34357067-8f7f-4c7a-8d5e-99b6e60f7891',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Gary',
        'sort-name': 'Gary',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'ended': null
      }
    },
    {
      'id': '148f2f97-b9c0-40f7-ab8a-e38ee3e6d711',
      'type': 'Person',
      'type-id': 'b6e035f4-3ce9-331c-97df-83397230b0df',
      'score': 73,
      'name': 'Slayer Beats',
      'sort-name': 'Slayer Beats',
      'gender': 'male',
      'country': 'DE',
      'area': {
        'id': '85752fda-13c4-31a3-bee5-0e5cb1f51dad',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'Germany',
        'sort-name': 'Germany',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'ended': null
      }
    },
    {
      'id': '1b834781-711c-4213-8077-06db71f99959',
      'score': 64,
      'name': 'Mental Devil Slayer',
      'sort-name': 'Mental Devil Slayer',
      'life-span': {
        'ended': null
      }
    },
    {
      'id': 'ab38acff-be19-464e-a930-57d7a952aa54',
      'type': 'Group',
      'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
      'score': 64,
      'name': 'Maggot Slayer Overdrive',
      'sort-name': 'Maggot Slayer Overdrive',
      'country': 'GB',
      'area': {
        'id': '8a754a16-0027-3a29-b6d7-2b40ea0481ed',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United Kingdom',
        'sort-name': 'United Kingdom',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'ended': null
      },
      'tags': [
        {
          'count': 1,
          'name': 'bristol'
        },
        {
          'count': 1,
          'name': 'england'
        },
        {
          'count': 1,
          'name': 'uk'
        },
        {
          'count': 1,
          'name': 'punk'
        }
      ]
    },
    {
      'id': '9b20614e-25f5-4569-acc6-21f67d937c5c',
      'score': 64,
      'name': 'Howling Snake Slayer',
      'sort-name': 'Howling Snake Slayer',
      'life-span': {
        'ended': null
      }
    },
    {
      'id': '33d17994-c248-4406-838f-958ad36c8d52',
      'type': 'Person',
      'type-id': 'b6e035f4-3ce9-331c-97df-83397230b0df',
      'score': 64,
      'name': 'Thee Slayer Hippy',
      'sort-name': 'Thee Slayer Hippy',
      'gender': 'male',
      'country': 'US',
      'area': {
        'id': '489ce91b-6658-3307-9877-795b68554c98',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United States',
        'sort-name': 'United States',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'ended': null
      },
      'aliases': [
        {
          'sort-name': 'Hanford, Steve',
          'type-id': 'd4dcd0c0-b341-3612-a332-c0ce797b25cf',
          'name': 'Steve Hanford',
          'locale': 'en',
          'type': 'Legal name',
          'primary': true,
          'begin-date': null,
          'end-date': null
        }
      ]
    },
    {
      'id': 'c9b01ae5-4db3-41b9-8690-6425f497f492',
      'type': 'Group',
      'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
      'score': 62,
      'name': 'Dragonslayer',
      'sort-name': 'Dragonslayer',
      'country': 'GB',
      'area': {
        'id': '8a754a16-0027-3a29-b6d7-2b40ea0481ed',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United Kingdom',
        'sort-name': 'United Kingdom',
        'life-span': {
          'ended': null
        }
      },
      'begin-area': {
        'id': 'e9222701-f4a5-4b99-b2e1-bdc9b63315ee',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Rochdale',
        'sort-name': 'Rochdale',
        'life-span': {
          'ended': null
        }
      },
      'end-area': {
        'id': 'e9222701-f4a5-4b99-b2e1-bdc9b63315ee',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Rochdale',
        'sort-name': 'Rochdale',
        'life-span': {
          'ended': null
        }
      },
      'disambiguation': 'British NWOBHM band',
      'life-span': {
        'begin': '1978',
        'end': '1987',
        'ended': true
      },
      'aliases': [
        {
          'sort-name': 'Slayer',
          'type-id': '894afba6-2816-3c24-8072-eadb66bd04bc',
          'name': 'Slayer',
          'locale': null,
          'type': 'Artist name',
          'primary': null,
          'begin-date': '1980',
          'end-date': '1983'
        },
        {
          'sort-name': 'Heavy Thunder',
          'type-id': '894afba6-2816-3c24-8072-eadb66bd04bc',
          'name': 'Heavy Thunder',
          'locale': null,
          'type': 'Artist name',
          'primary': null,
          'begin-date': '1978',
          'end-date': '1980'
        },
        {
          'sort-name': 'Dragonslayer',
          'type-id': '894afba6-2816-3c24-8072-eadb66bd04bc',
          'name': 'Dragonslayer',
          'locale': null,
          'type': 'Artist name',
          'primary': null,
          'begin-date': '1983',
          'end-date': null
        }
      ],
      'tags': [
        {
          'count': 1,
          'name': 'heavy metal'
        }
      ]
    },
    {
      'id': '74df4e2f-fe75-4b4a-87c5-3f1b4bc95aa2',
      'type': 'Person',
      'type-id': 'b6e035f4-3ce9-331c-97df-83397230b0df',
      'score': 59,
      'name': 'Leo Sayer',
      'sort-name': 'Sayer, Leo',
      'gender': 'male',
      'country': 'GB',
      'area': {
        'id': '8a754a16-0027-3a29-b6d7-2b40ea0481ed',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'United Kingdom',
        'sort-name': 'United Kingdom',
        'life-span': {
          'ended': null
        }
      },
      'begin-area': {
        'id': 'e5eaaf08-b498-42e9-bae6-41a747207c48',
        'type': 'City',
        'type-id': '6fd8f29a-3d0a-32fc-980d-ea697b69da78',
        'name': 'Shoreham-by-Sea',
        'sort-name': 'Shoreham-by-Sea',
        'life-span': {
          'ended': null
        }
      },
      'ipis': [
        '00077301975'
      ],
      'isnis': [
        '000000007822972X'
      ],
      'life-span': {
        'begin': '1948-05-21',
        'ended': null
      },
      'aliases': [
        {
          'sort-name': 'Лео Сейер',
          'name': 'Лео Сейер',
          'locale': null,
          'type': null,
          'primary': null,
          'begin-date': null,
          'end-date': null
        },
        {
          'sort-name': 'Leo Sayers',
          'name': 'Leo Sayers',
          'locale': null,
          'type': null,
          'primary': null,
          'begin-date': null,
          'end-date': null
        },
        {
          'sort-name': 'Gerard Hugh Sayer',
          'type-id': 'd4dcd0c0-b341-3612-a332-c0ce797b25cf',
          'name': 'Gerard Hugh Sayer',
          'locale': null,
          'type': 'Legal name',
          'primary': null,
          'begin-date': null,
          'end-date': null
        },
        {
          'sort-name': 'Leo Slayer',
          'name': 'Leo Slayer',
          'locale': null,
          'type': null,
          'primary': null,
          'begin-date': null,
          'end-date': null
        }
      ],
      'tags': [
        {
          'count': 1,
          'name': 'soft rock'
        },
        {
          'count': 1,
          'name': 'british'
        },
        {
          'count': 1,
          'name': 'songs'
        },
        {
          'count': 1,
          'name': 'english'
        },
        {
          'count': 1,
          'name': 'uk'
        }
      ]
    },
    {
      'id': 'f17137e1-ad19-4fe5-b2bb-94e2f5b9db92',
      'type': 'Person',
      'type-id': 'b6e035f4-3ce9-331c-97df-83397230b0df',
      'score': 57,
      'name': 'Mickl "The Slayer" Sayers',
      'sort-name': 'Sayers, Mickl "The Slayer"',
      'gender': 'male',
      'country': 'AU',
      'area': {
        'id': '106e0bec-b638-3b37-b731-f53d507dc00e',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'Australia',
        'sort-name': 'Australia',
        'life-span': {
          'ended': null
        }
      },
      'life-span': {
        'ended': null
      }
    },
    {
      'id': 'c48fa6c6-d322-47c2-b5a7-2659a2a15113',
      'score': 44,
      'name': 'Chapter 7',
      'sort-name': 'Chapter 7',
      'disambiguation': 'Slayer tribute artist',
      'life-span': {
        'ended': null
      }
    },
    {
      'id': '729e201f-ff6f-4798-ba2f-9e63570c856e',
      'type': 'Group',
      'type-id': 'e431f5f6-b5d2-343d-8b36-72607fffb74b',
      'score': 44,
      'name': 'Slayensemble',
      'sort-name': 'Slayensemble',
      'country': 'DE',
      'area': {
        'id': '85752fda-13c4-31a3-bee5-0e5cb1f51dad',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'Germany',
        'sort-name': 'Germany',
        'life-span': {
          'ended': null
        }
      },
      'begin-area': {
        'id': '85752fda-13c4-31a3-bee5-0e5cb1f51dad',
        'type': 'Country',
        'type-id': '06dd0ae4-8c74-30bb-b43d-95dcedf961de',
        'name': 'Germany',
        'sort-name': 'Germany',
        'life-span': {
          'ended': null
        }
      },
      'disambiguation': 'Slayer cover band',
      'life-span': {
        'begin': '2006-06-06',
        'ended': null
      }
    }
  ];
  return (
    <>
      <Artists items={arr}/>
    </>
  );
};

export default App;
