import { BadRequestException, ConflictException } from '@nestjs/common';

export function handleMongoDuplicateKeyError(error: any): never {
  if (error.code === 11000) {
    const duplicatedField = Object.keys(error.keyValue)[0];
    let message = `El valor del campo '${duplicatedField}' ya está en uso`;

    switch (duplicatedField) {
      case 'name':
        message = 'El nombre del equipo ya está en uso';
        break;
      case 'captainId':
        message = 'La persona asignada como capitán ya lo es en otro equipo';
        break;
    }

    throw new ConflictException(message);
  }
  throw new BadRequestException('Hubo un error, favor comuniquese con su administrador');
}