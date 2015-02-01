/**
 * Created by Jonathan on 1/17/2015.
 */
(function() {
    var app = angular.module('visualizerApp', []);

    app.controller('MainController', function () {
        this.attributes = data;
    });

    app.controller('ListController', function () {
        this.selectedRow = '';

        this.setSelection = function(name, attribute){
            if(this.selectedRow == name){
                this.selectedRow = '';
                delete selectedAttributes[attribute];
            }else {
                this.selectedRow = name;
                selectedAttributes[attribute] = name;
            }
            //for(var property in selectedAttributes){
            //    alert(property);
            //}
        }

        this.getColor = function(name){
            if(name == this.selectedRow){
                return "green";
            }
            else{
                return "white";
            }
        }
    });

    app.controller('VisualizationController', function () {
    });

    var data = [
        {
            attribute: 'Wi-fi',
            scores: [
                {
                    value: 'Yes',
                    score: 3.5
                },
                {
                    value: 'No',
                    score: 2.0
                }
            ]
        },
        {
            attribute: 'Good for kids',
            scores: [
                {
                    value: 'Yes',
                    score: 4.0
                },
                {
                    value: 'No',
                    score: 3.5
                }
            ]
        },
        {
            attribute: 'Price range',
            scores: [
                {
                    value: '$',
                    score: 1.5
                },
                {
                    value: '$$',
                    score: 2.0
                },
                {
                    value: '$$$',
                    score: 4.0
                },
                {
                    value: '$$$$',
                    score: 4.5
                }
            ]
        }
    ];

    var selectedAttributes = {};

})();