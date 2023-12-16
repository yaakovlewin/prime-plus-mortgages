const servicesData = [
    {
        id: 1,
        title: "First Time Buyer",
        description: "Expert advice for first time home buyers.",
        imageUrl: "/home.jpg",
        url: "/first-time-buyer",
        details: [
            {
                title: "Comprehensive Solutions",
                description: "We offer a comprehensive approach to residential mortgages, offering the best rates and terms to suit your needs. Our team of experts will guide you through the entire process, ensuring a smooth and efficient experience. Whether you're looking to purchase a new home or refinance an existing one, we have the expertise and resources to help you achieve your goals.",
                icon: "FaChartLine"
            },
            {
                title: "Tailored to Your Needs",
                description: "Each client has unique needs, and our service is designed to meet these through personalized solutions. We take into account your financial situation, goals, and preferences to provide you with the best residential mortgage options. Whether you're a first-time homebuyer or looking to refinance, our team of experts will guide you every step of the way to ensure a smooth and successful experience.",
                icon: "FaHome"
            },
            {
                title: "Expert Advice",
                description: "Our team of experts will help you navigate the residential mortgage process, providing personalized solutions tailored to your needs. We work with a variety of lenders to ensure competitive rates and terms that suit your financial goals. Whether you're looking to purchase a new home or refinance an existing one, we have the expertise and resources to guide you every step of the way, ensuring a smooth and successful experience.",
                icon: "FaUserTie"
            },
            {
                title: "Competitive Rates",
                description: "We work with a variety of lenders to ensure you get the best rate and terms for your mortgage. Our team of experts will guide you through the refinancing process, helping you save money and achieve your financial goals. Whether you're looking to lower your monthly payments, shorten your loan term, or access equity in your home, we have the expertise and resources to assist you every step of the way.",
                icon: "FaDollarSign"
            },
            // More details as needed
        ],
    },
    {
        id: 2,
        title: "Commercial Mortgages",
        description: "Tailored mortgage services for commercial properties.",
        imageUrl: "/house2.jpg",
        url: "/commercial-mortgages",
        details: [
            {
                title: "Comprehensive Solutions",
                description: "We offer a comprehensive approach to commercial mortgages, offering the best rates and terms to suit your business needs. Our team of experts will guide you through the entire process, ensuring a smooth and efficient experience. Whether you're looking to purchase a new commercial property or refinance an existing one, we have the expertise and resources to help you achieve your goals.",
                icon: "FaChartLine"
            },
            {
                title: "Tailored to Your Needs",
                description: "Each client has unique needs, and our service is designed to meet these through personalized solutions. We take into account your financial situation, goals, and preferences to provide you with the best residential mortgage options. Whether you're a first-time homebuyer or looking to refinance, our team of experts will guide you every step of the way to ensure a smooth and successful experience.",
                icon: "FaHome"
            },
            {
                title: "Expert Advice",
                description: "Our team of experts will help you navigate the commercial mortgage process, providing personalized solutions tailored to your business needs. We work with a variety of lenders to ensure competitive rates and terms that suit your financial goals. Whether you're looking to purchase a new commercial property or refinance an existing one, we have the expertise and resources to guide you every step of the way, ensuring a smooth and successful experience.",
                icon: "FaUserTie"
            },
            {
                title: "Competitive Rates",
                description: "We work with a variety of lenders to ensure you get the best rate and terms for your mortgage. Our team of experts will guide you through the refinancing process, helping you save money and achieve your financial goals. Whether you're looking to lower your monthly payments, shorten your loan term, or access equity in your home, we have the expertise and resources to assist you every step of the way.",
                icon: "FaDollarSign"
            }

        ],
    },
    {
        id: 3,
        title: "Remortgages",
        description: "Remortgage to get a better rate and save money.",
        imageUrl: "/renovation.jpg",
        url: "/remortgages",
        details: [
            {
                title: "Comprehensive Solutions",
                description: "We offer a comprehensive approach to residential mortgages, offering the best rates and terms to suit your needs. Our team of experts will guide you through the entire process, ensuring a smooth and efficient experience. Whether you're looking to purchase a new home or refinance an existing one, we have the expertise and resources to help you achieve your goals.",
                icon: "FaChartLine"
            },
            {
                title: "Tailored to Your Needs",
                description: "Each client has unique needs, and our service is designed to meet these through personalized solutions. We take into account your financial situation, goals, and preferences to provide you with the best residential mortgage options. Whether you're a first-time homebuyer or looking to refinance, our team of experts will guide you every step of the way to ensure a smooth and successful experience.",
                icon: "FaHome"
            },
            {
                title: "Expert Advice",
                description: "Our team of experts will help you navigate the residential mortgage process, providing personalized solutions tailored to your needs. We work with a variety of lenders to ensure competitive rates and terms that suit your financial goals. Whether you're looking to purchase a new home or refinance an existing one, we have the expertise and resources to guide you every step of the way, ensuring a smooth and successful experience.",
                icon: "FaUserTie"
            },
            {
                title: "Competitive Rates",
                description: "We work with a variety of lenders to ensure you get the best rate and terms for your mortgage. Our team of experts will guide you through the refinancing process, helping you save money and achieve your financial goals. Whether you're looking to lower your monthly payments, shorten your loan term, or access equity in your home, we have the expertise and resources to assist you every step of the way.",
                icon: "FaDollarSign"
            }
        ],
    },
    {
        id: 4,
        title: "Mortgage Renewal",
        description: "Renew your mortgage to get a better rate and save money.",
        imageUrl: "/images/service-renewal.jpg",
        url: "/mortgage-renewal"
    },
    {
        id: 5,
        title: "Home Equity Loans",
        description: "Unlock the equity in your home to pay for home renovations, education, or other expenses.",
        imageUrl: "/images/service-home-equity.jpg",
        url: "/home-equity-loans"
    },
    {
        id: 6,
        title: "Debt Consolidation",
        description: "Consolidate your debt to save money and reduce your monthly payments.",
        imageUrl: "/images/service-debt-consolidation.jpg",
        url: "/debt-consolidation"
    },
    {
        id: 7,
        title: "Home Equity Line of Credit",
        description: "Access the equity in your home with a line of credit.",
        imageUrl: "/images/service-home-equity-line-of-credit.jpg",
        url: "/home-equity-line-of-credit"
    },
    {
        id: 8,
        title: "Reverse Mortgages",
        description: "Access the equity in your home with a reverse mortgage.",
        imageUrl: "/images/service-reverse-mortgage.jpg",
        url: "/reverse-mortgages"
    },
    {
        id: 9,
        title: "Mortgage Life Insurance",
        description: "Protect your family with mortgage life insurance.",
        imageUrl: "/images/service-mortgage-life-insurance.jpg",
        url: "/mortgage-life-insurance"
    },
    {
        id: 10,
        title: "Mortgage Disability Insurance",
        description: "Protect your family with mortgage disability insurance.",
        imageUrl: "/images/service-mortgage-disability-insurance.jpg",
        url: "/mortgage-disability-insurance"
    },
    {
        id: 11,
        title: "Mortgage Critical Illness Insurance",
        description: "Protect your family with mortgage critical illness insurance.",
        imageUrl: "/images/service-mortgage-critical-illness-insurance.jpg",
        url: "/mortgage-critical-illness-insurance"
    }
];

export default servicesData;
