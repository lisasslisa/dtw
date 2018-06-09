var  student  = require('./student');
var  teacher  = require('./teachers');
teacher.add('scort')
 
 
function add(teacherName,students){
	teacher.add(teacherName);
	students.forEach(function(item,index){
		student.add(item)
	})
}
 
 
//module.exports = add ;
exports.add = add 
//把属性赋值给模块和 把属性赋值给 exports 效果是一样的  module.export