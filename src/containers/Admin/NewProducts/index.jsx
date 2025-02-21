
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { Container, Form, InputGrup, Label, Input, LabelUpload, Select,
   SubmitButt, ErrorMessage, ContainerCheckbox } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const schema = yup
  .object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.number().positive().required('Digite o preço do produto').typeError('Digite o preço do produto'),
    category: yup.object().required('Escolha uma categoria'),
    file: yup
      .mixed()
      .test('required', 'Escolha um arquivo para continuar', (value) => {
        return value && value.length > 0;
      })
      .test('fileSize', 'Carregue arquivos até 3mb', (value) => {
        return value && value.length > 0 && value[0].size <= 300000;
      }),
    offer: yup.bool(),
  })
  .required()

export function NewProducts() {
  const [filename, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

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

    await toast.promise(api.post('/products', productFormData), {
      pending: 'Adicinando o produto...',
      success: 'Produto criado com sucesso',
      error: 'Falha ao adicionar o produto, tente novamente',
     });
     setTimeout(() => {
      navigate('/admin/produtos');
    },2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGrup>
          <Label>Nome</Label>
          <Input type='text'
            autoComplete='none'
            {...register('name')} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGrup>

        <InputGrup>
          <Label>Preço</Label>
          <Input type='number'
            {...register('price')}
            min={5}
            step='0.01'
            />
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
          <Label>Categoria</Label>
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder='Categorias'
                menuPortalTarget={document.body}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGrup>

        <InputGrup>
          <ContainerCheckbox>
            <input type='checkbox'
              {...register('offer')}
            />
            <Label>Produto em Oferta ?</Label>
          </ContainerCheckbox>
        </InputGrup>

        <SubmitButt>Adicionar Produto</SubmitButt>
      </Form>
    </Container>
  )
}