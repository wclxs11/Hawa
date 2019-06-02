var businessDashboard = {
    revenue_chart: [{ month: 'Jan', revenue: 371755, unitsSold: 488 }, { month: 'Feb', revenue: 312452, unitsSold: 474 }, { month: 'Mar', revenue: 442523, unitsSold: 484 }, { month: 'Apr', revenue: 340224, unitsSold: 485 }, { month: 'May', revenue: 579636, unitsSold: 446 }, { month: 'June', revenue: 583899, unitsSold: 447 }, { month: 'July', revenue: 407496, unitsSold: 459 }, { month: 'Aug', revenue: 509318, unitsSold: 433 }, { month: 'Sep', revenue: 596425, unitsSold: 509 }, { month: 'Oct', revenue: 319760, unitsSold: 488 }, { month: 'Nov', revenue: 422415, unitsSold: 434 }, { month: 'Dec', revenue: 520126, unitsSold: 476 }],
    five_best: {
        sales_men: [{ name: 'Roger Williamson', revenue: 463615 }, { name: 'Harold Sanchez', revenue: 291194 }, { name: 'Beverly Gutierrez', revenue: 273693 }, { name: 'Katherine Bailey', revenue: 160051 }, { name: 'Juan Carpenter', revenue: 148197 }],
        regions: [{ name: 'Alsace', revenue: 446058 }, { name: 'Champagne-Ardenne', revenue: 442874 }, { name: 'Corse', revenue: 329661 }, { name: 'La Runion', revenue: 250939 }, { name: 'Midi-Pyrnes', revenue: 213344 }],
        products: [{ name: 'Brittany', revenue: 459027 }, { name: 'Corsica', revenue: 442637 }, { name: 'South West France', revenue: 402257 }, { name: 'Provence', revenue: 251841 }, { name: 'Beaujolais', revenue: 131824 }]
    },
    key_metrics: {
        revenue: {
            name: 'Revenue',
            value: 451745,
            target: 407669,
            last: [11564, 1929, 7532, 7560, 5904, 5404, 2983, 5711, 8186, 10680, 3805, 6061]
        },
        profit: {
            name: 'Profit',
            value: 401064,
            target: 613680,
            last: [6104, 2993, 3615, 10373, 5988, 6811, 11337, 2115, 5993, 5367, 4825, 2898]
        },
        expenses: {
            name: 'Expenses',
            value: 554860,
            target: 602895,
            last: [1660, 10931, 2076, 10312, 2740, 6265, 4193, 4377, 7833, 9468, 3948, 4186]
        },
        order_size: {
            name: 'Average Order Size',
            value: 64,
            target: 100,
            last: [54, 51, 53, 119, 62, 75, 116, 75, 99, 118, 56, 78]
        },
        customers: {
            name: 'New Customers',
            value: 120,
            target: 104,
            last: [117, 81, 22, 226, 192, 75, 99, 210, 15, 226, 83, 161]
        },
        market_share: {
            name: 'Market Share',
            value: 0.2,
            target: 0.16,
            last: [0.15, 0.13, 0.28, 0.38, 0.8, 0.17, 0.32, 0.25, 0.4, 0.31, 0.14, 0.27]
        }
    },
    key_metrics_by_month: {
        values: [
            { revenue: 11564, profit: 6104, expenses: 1660, order_size: 54, customers: 117, market_share: 0.15 },
            { revenue: 1929, profit: 2993, expenses: 10931, order_size: 51, customers: 81, market_share: 0.13 },
            { revenue: 7532, profit: 3615, expenses: 2076, order_size: 53, customers: 22, market_share: 0.28 },
            { revenue: 7560, profit: 10373, expenses: 10312, order_size: 119, customers: 226, market_share: 0.38 },
            { revenue: 5904, profit: 5988, expenses: 2740, order_size: 62, customers: 192, market_share: 0.8 },
            { revenue: 5404, profit: 6811, expenses: 6265, order_size: 75, customers: 75, market_share: 0.17 },
            { revenue: 2983, profit: 11337, expenses: 4193, order_size: 116, customers: 99, market_share: 0.32 },
            { revenue: 5711, profit: 2115, expenses: 4377, order_size: 75, customers: 210, market_share: 0.25 },
            { revenue: 8186, profit: 5993, expenses: 7833, order_size: 99, customers: 15, market_share: 0.4 },
            { revenue: 10680, profit: 5367, expenses: 9468, order_size: 118, customers: 226, market_share: 0.31 },
            { revenue: 3805, profit: 4825, expenses: 3948, order_size: 56, customers: 83, market_share: 0.14 },
            { revenue: 6061, profit: 2898, expenses: 4186, order_size: 78, customers: 161, market_share: 0.27 }
        ]
    }
}
