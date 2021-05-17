import {Formik, Field, ErrorMessage, Form,} from "formik";
import *as Yup from "yup"
import {withRouter} from 'react-router-dom'
import React, {useState} from "react";


//using Formik to create form for adding product to firebase

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    description: Yup.string()
        .required('Required'),
    imgUrl: Yup.string()
        .required('Required'),
    count: Yup.string()
        .required('Required'),
    width: Yup.string()
        .required('Required'),
    height: Yup.string()
        .required('Required'),
    weight: Yup.string()
        .required('Required'),
})

const AddForm = (props) => {
    const [error, setError] = useState("");
    console.log(props.createProduct)
    return (<div>

        <Formik initialValues={{
            name: '', description: '', count: '', imgUrl: '',
            width: '', height: '', weight: ''
        }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    let product = {
                        name: values['name'],
                        description: values['description'],
                        count: values['count'],
                        imgUrl: values['imgUrl'],
                        size: {
                            width: values['width'],
                            height: values['height']
                        },
                        weight: values['weight']
                    }
                    props.createProduct(product)
                }}>
            {({errors, touched}) => (
                <Form>
                    <div>
                        {error}
                    </div>
                    <div>
                        <div>
                            <div><label>Name </label></div>
                            <Field
                                //className={classes.field}
                                placeholder="Name of your product"
                                name="name"
                                type="text"

                            />
                            <div>
                                <ErrorMessage name="name"/>
                            </div>
                        </div>
                        <div>
                            <div><label>Description </label></div>
                            <Field
                                //className={classes.field}
                                placeholder="Describe your product"
                                name="description"
                                type="text"

                            />
                            <div>
                                <ErrorMessage name="description"/>
                            </div>
                        </div>
                        <div>
                            <div><label>Link on your image </label></div>
                            <Field
                                //className={classes.field}
                                placeholder="enter your link"
                                name="imgUrl"
                                type="text"

                            />
                            <div>
                                <ErrorMessage name="imgUrl"/>
                            </div>
                        </div>
                        <div>
                            <div><label>Count of your product </label></div>
                            <Field
                                //className={classes.field}
                                placeholder="Enter count"
                                name="count"
                                type="text"

                            />
                            <div>
                                <ErrorMessage name="count"/>
                            </div>
                        </div>
                        <div>
                            <div><label>Width </label></div>
                            <Field
                                //className={classes.field}
                                placeholder="Width"
                                name="width"
                                type="text"

                            />
                            <div>
                                <ErrorMessage name="width"/>
                            </div>
                        </div>
                        <div>
                            <div><label>Height </label></div>
                            <Field
                                //className={classes.field}
                                placeholder="Height"
                                name="height"
                                type="text"

                            />
                            <div>
                                <ErrorMessage name="height"/>
                            </div>
                        </div>
                        <div>
                            <div><label>Weight </label></div>
                            <Field
                                //className={classes.field}
                                placeholder="Weight"
                                name="weight"
                                type="text"

                            />
                            <div>
                                <ErrorMessage name="weight"/>
                            </div>
                        </div>

                    </div>


                    <div>
                        <button

                            type="submit">Add product!
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>)
}

export default withRouter(AddForm)