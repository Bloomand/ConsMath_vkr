const dataContext = {
    "questions": [{
        "name": "Compounding1",
        "kol": 17,
        "id": 1,        
        "Rtexts": [{
            "value": ["Now", "As of now", "Currently", "In Year 0"],
            "sequence": 1
        },
        {
            "value": ["EBITDA", "Revenue", "Sales", "Profit", "COGS", "SG&A", "Overheads", "Variable Cost", "Fixed Cost", "Income", "Selling Expense", "Administrative Expense", "Gross profit", "OPEX", "CAPEX", "Capital expenditures", "R&D Expense", "Cost of goods sold", "Labor Cost", "Payroll Expense"],
            "sequence": 2
        },
        {
            "value": ["the company", "the logistics company", "the chain of shopping malls", "the food delivery service", "the telecom operator", "the carsharing company", "the distributor of B2B IT services", "th fashion retailer", "the oil&gas company", "the startup", "the pharmaceutical company", "the FMCG company", "the electric utility company", "the online marketplace", "the producer of aluminum", "the automotive manufacturing company", "the hardware producer", "the manufacturer of consumer electronics", "the company Pollofret Limited", "the company Montos&Brothers", "the company BeertyCo", "the company Farenty Enterprise", "the company Venderatelli", "the company Anita and Co", "the company Delaveli Corporated", "the competitor's business", "the acquired company", "the company FT&T"],
            "sequence": 4
        },
        {
            "value": ["grow", "increase", "be growing", "be increasing"],
            "sequence": 8
        },
        {
            "value": ["the percentage increase will be", "it will increase by"],
            "sequence": 14
        }
        ],
        "texts": [{
            "texttoShow": "of",
            "sequence": 3
        },
        {
            "texttoShow": "is",
            "sequence": 5
        },
        {
            "texttoShow": "mln dollars. It will",
            "sequence": 7
        },
        {
            "texttoShow": "at the average annual rate of",
            "sequence": 9
        },
        {
            "texttoShow": ". After",
            "sequence": 11
        },
        {
            "texttoShow": "years",
            "sequence": 13
        },
        {
            "texttoShow": ".",
            "sequence": 16
        }
        ],
        "nums": [{
            "minValue": 10,
            "maxValue": 999,
            "denominator": 1,
            "sequence": 6
        },
        {
            "percent": true,
            "minValue": 5,
            "maxValue": 150,
            "denominator": 1000,
            "sequence": 10
        },
        {
            "minValue": 3,
            "maxValue": 10,
            "denominator": 1,
            "comment": "2% <= sequence10 x sequence12 <= 50%",
            "sequence": 12
        }
        ],
        "answer": {
            "texttoShow": "_____%",
            "sequence": 15,
            "percent": true,
            "comment_correctAnswer": "((1+sequence10)^(sequence12)-1) x 100"
        }
    },
    {
        "name": "Compounding2",
        "kol": 17,
        "id": 2,
        "Rtexts": [{
            "value": ["Now", "As of now", "Currently", "In Year 0"],
            "sequence": 1
        },
        {
            "value": ["EBITDA", "Revenue", "Sales", "Profit", "COGS", "SG&A", "Overheads", "Variable Cost", "Fixed Cost", "Income", "Selling Expense", "Administrative Expense", "Gross profit", "OPEX", "CAPEX", "Capital expenditures", "R&D Expense", "Cost of goods sold", "Labor Cost", "Payroll Expense"],
            "sequence": 2
        },
        {
            "value": ["the company", "the logistics company", "the chain of shopping malls", "the food delivery service", "the telecom operator", "the carsharing company", "the distributor of B2B IT services", "th fashion retailer", "the oil&gas company", "the startup", "the pharmaceutical company", "the FMCG company", "the electric utility company", "the online marketplace", "the producer of aluminum", "the automotive manufacturing company", "the hardware producer", "the manufacturer of consumer electronics", "the company Pollofret Limited", "the company Montos&Brothers", "the company BeertyCo", "the company Farenty Enterprise", "the company Venderatelli", "the company Anita and Co", "the company Delaveli Corporated", "the competitor's business", "the acquired company", "the company FT&T"],
            "sequence": 4
        },
        {
            "value": ["grow", "increase", "be growing", "be increasing"],
            "sequence": 8
        },
        {
            "value": [". In", ". In the next"],
            "sequence": 11
        },
        {
            "value": ["it will increase by", "the increase will amount to"],
            "sequence": 14
        }
        ],
        "texts": [{
            "texttoShow": "of",
            "sequence": 3
        },
        {
            "texttoShow": "is",
            "sequence": 5
        },
        {
            "texttoShow": "mln dollars. It will",
            "sequence": 7
        },
        {
            "texttoShow": "at the average annual rate of",
            "sequence": 9
        },
        {
            "texttoShow": "years",
            "sequence": 13
        },
        {
            "texttoShow": "mln dollars.",
            "sequence": 16
        }
        ],
        "nums": [{
            "minValue": 10,
            "maxValue": 999,
            "denominator": 1,
            "sequence": 6
        },
        {
            "percent": true,
            "minValue": 5,
            "maxValue": 150,
            "denominator": 1000,
            "sequence": 10
        },
        {
            "minValue": 3,
            "maxValue": 10,
            "denominator": 1,
            "comment": "2% <= sequence10 x sequence12 <= 50%",
            "sequence": 12
        }
        ],
        "answer": {
            "texttoShow": "_____",
            "sequence": 15,
            "comment_correctAnswer": "sequence6 x (1+sequence10)^(sequence12)-sequence6"
        }
    },
    {
        "name": "Compounding3",
        "kol": 15,
        "id": 3,
        "Rtexts": [{
            "value": ["Now it is", "This year it is", "Currently it is"],
            "sequence": 9
        },
        {
            "value": ["EBITDA", "Revenue", "Sales", "Profit", "COGS", "SG&A", "Overheads", "Variable Cost", "Fixed Cost", "Income", "Selling Expense", "Administrative Expense", "Gross profit", "OPEX", "CAPEX", "Capital expenditures", "R&D Expense", "Cost of goods sold", "Labor Cost", "Payroll Expense"],
            "sequence": 3
        },
        {
            "value": ["the company", "the logistics company", "the chain of shopping malls", "the food delivery service", "the telecom operator", "the carsharing company", "the distributor of B2B IT services", "th fashion retailer", "the oil&gas company", "the startup", "the pharmaceutical company", "the FMCG company", "the electric utility company", "the online marketplace", "the producer of aluminum", "the automotive manufacturing company", "the hardware producer", "the manufacturer of consumer electronics", "the company Pollofret Limited", "the company Montos&Brothers", "the company BeertyCo", "the company Farenty Enterprise", "the company Venderatelli", "the company Anita and Co", "the company Delaveli Corporated", "the competitor's business", "the acquired company", "the company FT&T"],
            "sequence": 5
        },
        {
            "value": ["What was the average annual percentage growth rate?", "By what percentage per annum it increased?"],
            "sequence": 12
        }
        ],
        "texts": [{
            "texttoShow": "years ago",
            "sequence": 2
        },
        {
            "texttoShow": "of",
            "sequence": 4
        },
        {
            "texttoShow": "was",
            "sequence": 6
        },
        {
            "texttoShow": "mln dollars",
            "sequence": 8
        },
        {
            "texttoShow": "higher.",
            "sequence": 11
        },
        {
            "texttoShow": "Answer:",
            "sequence": 13
        }
        ],
        "nums": [{
            "minValue": 10,
            "maxValue": 999,
            "denominator": 1,
            "sequence": 7
        },
        {
            "comment_Value": "(1+correctAnswer/100)^(sequence1)-1",
            "percent": true,
            "sequence": 10
        },
        {
            "minValue": 3,
            "maxValue": 10,
            "denominator": 1, 
            "comment": "2% <= sequence1 x sequence14/100 <= 50%",
            "sequence": 1
        }
        ],
        "answer": {
            "texttoShow": "_____%",
            "sequence": 14,
            "percent": true,
            "minValue": 5,
            "maxValue": 150,
            "denominator": 1000
        }
    },
    {
        "name": "Compounding4",
        "kol": 19,
        "id": 4,
        "Rtexts": [{
            "value": ["EBITDA", "Revenue", "Sales", "Profit", "COGS", "SG&A", "Overheads", "Variable Cost", "Fixed Cost", "Income", "Selling Expense", "Administrative Expense", "Gross profit", "OPEX", "CAPEX", "Capital expenditures", "R&D Expense", "Cost of goods sold", "Labor Cost", "Payroll Expense"],
            "sequence": 1
        },
        {
            "value": ["the company", "the logistics company", "the chain of shopping malls", "the food delivery service", "the telecom operator", "the carsharing company", "the distributor of B2B IT services", "th fashion retailer", "the oil&gas company", "the startup", "the pharmaceutical company", "the FMCG company", "the electric utility company", "the online marketplace", "the producer of aluminum", "the automotive manufacturing company", "the hardware producer", "the manufacturer of consumer electronics", "the company Pollofret Limited", "the company Montos&Brothers", "the company BeertyCo", "the company Farenty Enterprise", "the company Venderatelli", "the company Anita and Co", "the company Delaveli Corporated", "the competitor's business", "the acquired company", "the company FT&T"],
            "sequence": 3
        },
        {
            "value": ["increased", "rose"],
            "sequence": 4
        },
        {
            "value": ["In how many years did it happen if", "How many years were required for such increase if"],
            "sequence": 12
        },
        {
            "value": ["the average annual growth rate was", "the average yearly growth rate was", "the average growth rate per annum was"],
            "sequence": 13
        }
        ],
        "texts": [{
            "texttoShow": "of",
            "sequence": 2
        },
        {
            "texttoShow": "by",
            "sequence": 5
        },
        {
            "texttoShow": "from",
            "sequence": 7
        },
        {
            "texttoShow": "mln dollars up to",
            "sequence": 9
        },
        {
            "texttoShow": "mln dollars.",
            "sequence": 11
        },
        {
            "texttoShow": ".",
            "sequence": 15
        },
        {
            "texttoShow": "Answer:",
            "sequence": 16
        },
        {
            "texttoShow": ".",
            "sequence": 18
        }
        ],
        "nums": [{
            "comment_Value": "(1+sequence14)^(correctAnswer)-1",
            "sequence": 6,
            "percent": true
        },
        {
            "minValue": 10,
            "maxValue": 999,
            "denominator": 1,
            "sequence": 8
        },
        {
            "comment_Value": "sequence8 x (1+sequence14)^(correctAnswer)",
            "sequence": 10
        },
        {
            "percent": true,
            "minValue": 5,
            "maxValue": 150,
            "denominator": 1000,
            "comment": "2% <= sequence14 x sequence17 <= 50%",
            "sequence": 14
        }
        ],
        "answer": {
            "texttoShow": "_____",
            "sequence": 17,
            "minValue": 3,
            "maxValue": 10,
            "denominator": 1
        }
    },
    {
        "name": "ProfitMargin1",
        "kol": 12,
        "id": 5,
        "RtextsWithi": [{
            "value": ["Profit", "Gross Profit", "Operating Profit", "EBIT", "EBITDA"],
            "sequence": 1
        },
        {
            "value": ["Profit", "Gross Profit", "Operating Profit", "EBIT", "EBITDA"],
            "sequence": 9
        }
        ],
        "Rtexts": [{
            "value": ["the company", "the logistics company", "the chain of shopping malls", "the food delivery service", "the telecom operator", "the carsharing company", "the distributor of B2B IT services", "the fashion retailer", "the oil&gas company", "the startup", "the pharmaceutical company", "the FMCG company", "the electric utility company", "the online marketplace", "the producer of aluminum", "the automotive manufacturing company", "the hardware producer", "the manufacturer of consumer electronics", "the company Pollofret Limited", "the company Montos&Brothers", "the company BeertyCo", "company Farenty Enterprise", "the company Venderatelli", "the company Anita and Co", "the company Delaveli Corporated", "the competitor's business", "the acquired company", "the company FT&T"],
            "sequence": 3
        }],
        "texts": [{
            "texttoShow": "of",
            "sequence": 2
        },
        {
            "texttoShow": "is",
            "sequence": 4
        },
        {
            "texttoShow": "mln dollars while Revenue is",
            "sequence": 6
        },
        {
            "texttoShow": ".",
            "sequence": 8
        },
        {
            "texttoShow": "margin is",
            "sequence": 10
        }
        ],
        "nums": [{
            "comment": "sequence 7 x correctAnswer/100",
            "sequence": 5
        },
        {
            "minValue": 1,
            "maxValue": 999,
            "denominator": 1,
            "sequence": 7
        }
        ],
        "answer": {
            "texttoShow": "_____%",
            "percent": true,
            "minValue": 5,
            "maxValue": 50,
            "denominator": 100,
            "sequence": 11
        }
    }
    ]
}

export default dataContext