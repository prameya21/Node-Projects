
var filePath="C:\\Users\\Daemon\\eclipse-workspace\\InterviewPrep\\src";

var textToSearch="main";

var path=require('path');
var fs=require('fs');

var ret=[];


fs.readdir( filePath, function( err, files) {
        if ( err )
        {
            console.log("Error reading files: ", err);
        }
        else
        {
            // keep track of how many we have to go.
            var remaining = files.length;
            var totalBytes = 0;
            if(files.length==0)
            {
              console.log("Directory emnpty");
              return ret;
            }
            console.log(remaining);

            files.forEach(function(file){
              fs.readFile(filePath+"\\"+file, 'utf8',function( error, data ) {
                  if ( error )
                  {
                      console.log("Error: ", error);
                  }
                  else
                  {
                      if(data.includes(textToSearch))
                      {
                        //console.log(file);
                        ret.push(file);
                      }
                  }
                  remaining-=1;
                  if(remaining==0)
                  {
                    console.log(ret.length);
                  }
              });
            });
          }
          return ret;
    });
