import React from 'react'

export default function Formbuilder(data) {
let formelemts=Object.values(data.data.form);

    const MYradio=(data)=>{
        data.data.options.map(function(element){
            console.log(element);
            return(
                <>
                <label>hello</label>
                </>
            );

        })

    }

  return (
    formelemts.map(function (element) {
        if(element.id=='gender'){
            return (
                <div className="col-md-6 mb-3">
                    <div className="form-group first">
                    <label for="fname">{element.title}</label>
                        <MYradio data= {element} />
                    </div>
                </div>
                )

        }else{
            return (
            <div className="col-md-6 mb-3">
                <div className="form-group first">
                <label for="fname">{element.title}</label>
                <input type={element.type} className="form-control"
                    placeholder={element.id} id={element.id} />
                </div>
            </div>
            )
        }
      })
  )
}
