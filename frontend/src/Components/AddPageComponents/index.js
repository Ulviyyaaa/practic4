import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import axios from "axios";

function AddPageComponents() {
  return (
    <div className="mainInpSec">
      <Formik
        initialValues={{ imgUrl: "", description: "", title: "", price: "" }}
        validationSchema={Yup.object({
          imgUrl: Yup.string().required("imgUrl..."),
          description: Yup.string().required("description..."),
          title: Yup.string().required("title..."),
          price: Yup.string().required("price..."),
        })}
        onSubmit={(values) => {
          axios.post("http://localhost:8080/users",values)
        }}
      >
        <Form>
          <div className="mainInp">
            <div className="inpStyle">
              <label htmlFor="imgUrl"></label>
              <Field name="imgUrl" type="text" placeholder="imgUrl..." className='onlyStyle' />
              <div style={{ color: "red" }}>
                <ErrorMessage name="imgUrl" />
              </div>
            </div>

            <div className="inpStyle">
              <label htmlFor="description"></label>
              <Field
                name="description"
                type="text"
                placeholder="description..."
                className='onlyStyle' />
              <div style={{ color: "red" }}>
                <ErrorMessage name="description" />
              </div>
            </div>

            <div className="inpStyle">
              <label htmlFor="title"></label>
              <Field name="title" type="text" placeholder="title..."  className='onlyStyle'/>
              <div style={{ color: "red" }}>
                <ErrorMessage name="title" />
              </div>
            </div>
            <div className="inpStyle">
              <label htmlFor="price"></label>
              <Field name="price" type="text" placeholder="price..." className='onlyStyle' />
              <div style={{ color: "red" }}>
                <ErrorMessage name="price" />
              </div>
            </div>

            <button className="inpBtn" type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default AddPageComponents;
