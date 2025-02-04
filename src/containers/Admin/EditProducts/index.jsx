
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { Container, Form, InputGrup, Label, Input, LabelUpload, Select, SubmitButt, ErrorMessage, ContainerCheckbox } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';


const schema = yup
  .object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.number().positive().required('Digite o preço do produto').typeError('Digite o preço do produto'),
    category: yup.object().required('Escolha uma categoria'),
    offer: yup.bool(),
  })
  .required()

export function EditProducts() {
  const [filename, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const { state: { product }
  } = useLocation();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);

    }
    loadCategories();
  }, [])


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);
    productFormData.append('category_id', data.category.id);
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer);


    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: 'Editando o produto...',
      success: 'Produto editado com sucesso',
      error: 'Falha ao editar o produto, tente novamente',
    });
    setTimeout(() => {
      navigate('/admin/produtos');
    },1000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGrup>
          <Label>Nome</Label>
          <Input type='text'
            autoComplete='none'
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGrup>

        <InputGrup>
          <Label>Preço</Label>
          <Input type='number'
            {...register('price')}
            defaultValue={product.price / 100}
            min={5} />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGrup>

        <InputGrup>
          <LabelUpload>
            <Image />
            <input type='file'
              {...register('file')}
              accept='image/png, image/jpeg'
              onChange={(value) => {

                setFileName(value.target.files[0]?.name);
                register('file').onChange(value);
              }}
            />
            {filename || 'Upload do produto'}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGrup>

        <InputGrup>
          <ContainerCheckbox>
            <input type='checkbox'
              defaultValue={product.offer}
              {...register('offer')}
            />
            <Label>Produto em Oferta ?</Label>
          </ContainerCheckbox>
        </InputGrup>

        <InputGrup>
          <Label>Categoria</Label>
          <Controller
            name='category'
            defaultValue={product.category}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder='Categorias'
                menuPortalTarget={document.body}
                defaultValue={product.category}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGrup>
        <SubmitButt>Editar Produto</SubmitButt>
      </Form>
    </Container>
  )
}