
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { Container, Form, InputGrup, Label, Input, LabelUpload, Select, SubmitButt } from './styles';


const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()

export function NewProducts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
      const onSubmit = (data) => console.log(data);

    return(
        <Container>
            <Form>
                <InputGrup>
                <Label>Nome</Label>
                <Input/>
                </InputGrup>

                <InputGrup>
                <Label>Preço</Label>
                <Input type='number'
                min={5}/>
                </InputGrup>

                <InputGrup>
                <LabelUpload>
                <Image/> Carregar imagem do produto
                <input type="file"/>
                </LabelUpload>
                </InputGrup>

                <InputGrup>
                <Label>Categoria</Label>
                <Select/>
                </InputGrup>

                <SubmitButt>Adicionar Produto</SubmitButt>
            </Form>
        </Container>
    )
}