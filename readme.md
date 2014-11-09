# BAM Filters

* A growing list of angular filters that are dynamic enough to support nested Json data structures. 
* Compatible with Angular v1.2.2+ 

## Getting Started

1) Currently you will need to download the zip from GitHub, and drop it into your project where desired.

2) Include bam-filtering.js (or bam-filtering.min.js) in your index.html, after including Angular itself.

3) Add 'bam.filtering' to your main module's list of dependencies.


## Basic Usage
* You are able to access nested attributes by passing an of keys into the filter like so: 


        #json: 
        [{"Key1": {"Key2": {"Key3": 1}}}, {"Key1": {"Key2": {"Key3": 2}}}]
    
        <div ng-repeat="item in items | bamGreaterThan: ['Key1', 'Key1', 'Key3']: 1">
        </div>
    
        returned value: 
        {"Key1": {"Key2": {"Key3": 2}}}

* If a json object does not contain the requested key, then it is filtered out, like so:


        #json: 
        # Notice the second object does not contain Key3
        [{"Key1": {"Key2": {"Key3": 1}}}, {"Key1": {"Key2": {}}}]
    
        <div ng-repeat="item in items | bamGreaterThan: ['Key1', 'Key1', 'Key3']: 0">
        </div>
    
        returned value: 
        {"Key1": {"Key2": {"Key3": 1}}}

* If you do not want to filter my nested keys, pass in an empty array:


        #data: 
        [1, 2, 3]
    
        <div ng-repeat="item in items | bamGreaterThan: []: 0">
        </div>
    
        returned value: 
        [1, 2, 3]
    
## Filters

#### Numberic Filters:
* Filters by a number value, supports interger or floats. 
    * bamGreaterThan
    * bamLessThan

#### Word Counting filters: 
* Filter by the number of words in a string (seperated at a space). Filters by an integer. 
    * bamWordCountGreaterThan
    * bamWordCountLessThan
    
## About
* Pull request, additions, and issues are welcome.
* Released under M.I.T.
* Brought to you by Blast Analytics and Marketing [Blast A.M.](http://www.blastam.com/)