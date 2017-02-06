var billCalculator = angular.module('BillCalculator', []);

billCalculator.filter('percentage', function(){
    function percentage(number){
        return (number * 100) + "%";
    }
    return percentage;
});

billCalculator.controller('BillCalculatorController', [
    '$scope', function($scope){
        
        var bcc = this;
        
        bcc.tipRates = [0.10, 0.15, 0.20];
        bcc.tipRate = bcc.tipRates[0];
        
        bcc.taxRates = 
        [
            {
                state: 'AL',
                value: 0.0897
            },
            {
                state: 'AK',
                value: 0.0178
            },
            {
                state: 'AZ',
                value: 0.0825
            },
            {
                state: 'AR',
                value: 0.0930
            },
            {
                state: 'CA',
                value: 0.0848
            },
            {
                state: 'CO',
                value: 0.0752
            },
            {
                state: 'CT',
                value: 0.0635
            },
            {
                state: 'FL',
                value: 0.0666
            },
            {
                state: 'GA',
                value: 0.0701
            },
            {
                state: 'HI',
                value: 0.0435
            },
            {
                state: 'ID',
                value: 0.0603
            },
            {
                state: 'IL',
                value: 0.0864
            },
            {
                state: 'IN',
                value: 0.0700
            },
            {
                state: 'IA',
                value: 0.0679
            },
            {
                state: 'KS',
                value: 0.0860
            },
            {
                state: 'KY',
                value: 0.0600
            },
            {
                state: 'LA',
                value: 0.0900
            },
            {
                state: 'ME',
                value: 0.0550
            },
            {
                state: 'MD',
                value: 0.0600
            },
            {
                state: 'MA',
                value: 0.0625
            },
            {
                state: 'MI',
                value: 0.0600
            },
            {
                state: 'MN',
                value: 0.0727
            },
            {
                state: 'MS',
                value: 0.0707
            },
            {
                state: 'MO',
                value: 0.0786
            },
            {
                state: 'MT',
                value: 0.0
            },
            {
                state: 'NE',
                value: 0.0687
            },
            {
                state: 'NV',
                value: 0.0798
            },
            {
                state: 'NH',
                value: 0.0
            },
            {
                state: 'NJ',
                value: 0.0697
            },
            {
                state: 'NM',
                value: 0.0751
            },
            {
                state: 'NY',
                value: 0.0849
            },
            {
                state: 'NC',
                value: 0.0690
            },
            {
                state: 'ND',
                value: 0.0682
            },
            {
                state: 'OH',
                value: 0.0714
            },
            {
                state: 'OK',
                value: 0.0882
            },
            {
                state: 'OR',
                value: 0.0
            },
            {
                state: 'PA',
                value: 0.0634
            },
            {
                state: 'RI',
                value: 0.0700
            },
            {
                state: 'SC',
                value: 0.0722
            },
            {
                state: 'SD',
                value: 0.0584
            },
            {
                state: 'TN',
                value: 0.0946
            },
            {
                state: 'TX',
                value: 0.0817
            },
            {
                state: 'UT',
                value: 0.0669
            },
            {
                state: 'VT',
                value: 0.0617
            },
            {
                state: 'VA',
                value: 0.0563
            },
            {
                state: 'WA',
                value: 0.0889
            },
            {
                state: 'WV',
                value: 0.0620
            },
            {
                state: 'WI',
                value: 0.0541
            },
            {
                state: 'WY',
                value: 0.0542
            }
        ];
        
        bcc.taxRate = bcc.taxRates[41];
        
        bcc.tip = function(){
            return $scope.subtotal * bcc.tipRate;
        };
        
        bcc.tax = function(){
            return $scope.subtotal * bcc.taxRate.value;
        };
        
        bcc.taxTotal = function(){
            return $scope.subtotal + bcc.tax();
        };
        
        bcc.tipTotal = function(){
            return $scope.subtotal + bcc.tip();
        };
        
        bcc.finalTotal = function(){
            return bcc.tax() + bcc.tipTotal();
        };
    }    
]);
