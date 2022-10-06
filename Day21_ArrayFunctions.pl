# cerner_2tothe5th_2022

@days = ("Mon","Tue","Wed");
print "1st : @days\n";
push(@days, "Thu");                                             
print "2nd when push : @days\n";
unshift(@days, "Fri");                                          
print "3rd when unshift : @days\n";
pop(@days);
print "4th when pop : @days\n";                                 
shift(@days);                                                   
print "5th when shift : @days\n";