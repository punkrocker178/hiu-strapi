import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
    icon: 'envelop';
  };
  attributes: {
    contactEmail: Schema.Attribute.String;
    contactName: Schema.Attribute.String;
    contactPhone: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contact': ContactContact;
    }
  }
}
