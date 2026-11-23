/*Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/


for (let row = 1; row <= 7; row++) {

    let pattern = "";

    for (let column = 1; column <= row; column++) {

        pattern += "#";

    }

    console.log(pattern);
}
