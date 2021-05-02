/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./api/context/index"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSONObject";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSONObject";
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    model: NexusPrisma<TypeName, 'model'>
    crud: any
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateProjectInput: { // input type
    description: string; // String!
    preview: string; // String!
    repoLink: string; // String!
    siteLink: string; // String!
    tags: Array<string | null>; // [String]!
    title: string; // String!
  }
  FavoriteProjectInput: { // input type
    action: NexusGenEnums['FavoriteAction']; // FavoriteAction!
    projectId: string; // String!
    userId: string; // String!
  }
  ReactToProjectInput: { // input type
    action: NexusGenEnums['ProjectAction']; // ProjectAction!
    projectId: string; // ID!
    userId: string; // ID!
  }
  UpdateProjectInput: { // input type
    description?: string | null; // String
    preview?: string | null; // String
    repoLink?: string | null; // String
    siteLink?: string | null; // String
    tags?: Array<string | null> | null; // [String]
    title?: string | null; // String
  }
  UpdateUsertInput: { // input type
    discord: string; // String!
    email: string; // String!
    github: string; // String!
    lastName: string; // String!
    name: string; // String!
    role: string; // String!
  }
}

export interface NexusGenEnums {
  FavoriteAction: "FAVORITE" | "UNDO"
  ProjectAction: "DISLIKE" | "LIKE"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  JSONObject: any
}

export interface NexusGenObjects {
  Mutation: {};
  Project: { // root type
    author: NexusGenRootTypes['User']; // User!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    favorites: Array<NexusGenRootTypes['User'] | null>; // [User]!
    id?: string | null; // ID
    isApproved?: boolean | null; // Boolean
    likes: Array<NexusGenRootTypes['User'] | null>; // [User]!
    preview?: string | null; // String
    repoLink?: string | null; // String
    siteLink?: string | null; // String
    tags?: Array<string | null> | null; // [String]
    title?: string | null; // String
  }
  ProjectsResponse: { // root type
    nextCursor?: string | null; // String
    prevCursor?: string | null; // String
    results: Array<NexusGenRootTypes['Project'] | null>; // [Project]!
    totalCount?: number | null; // Int
  }
  Query: {};
  User: { // root type
    avatar?: string | null; // String
    discord?: string | null; // String
    email?: string | null; // String
    favoriteProjects?: NexusGenRootTypes['Project'] | null; // Project
    github?: string | null; // String
    id?: string | null; // ID
    name?: string | null; // String
    projects?: NexusGenRootTypes['Project'] | null; // Project
    projectsLiked?: NexusGenRootTypes['Project'] | null; // Project
    role?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createProject: NexusGenRootTypes['Project'] | null; // Project
    deleteManyProjects: NexusGenScalars['JSONObject'] | null; // JSONObject
    deleteProject: string | null; // String
    favoriteProject: NexusGenRootTypes['Project'] | null; // Project
    login: NexusGenScalars['JSONObject']; // JSONObject!
    reactToProject: NexusGenRootTypes['Project'] | null; // Project
    signup: NexusGenScalars['JSONObject']; // JSONObject!
    updateProject: NexusGenRootTypes['Project'] | null; // Project
    updateUser: NexusGenRootTypes['User']; // User!
  }
  Project: { // field return type
    author: NexusGenRootTypes['User']; // User!
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    description: string | null; // String
    favorites: Array<NexusGenRootTypes['User'] | null>; // [User]!
    id: string | null; // ID
    isApproved: boolean | null; // Boolean
    likes: Array<NexusGenRootTypes['User'] | null>; // [User]!
    preview: string | null; // String
    repoLink: string | null; // String
    siteLink: string | null; // String
    tags: Array<string | null> | null; // [String]
    title: string | null; // String
  }
  ProjectsResponse: { // field return type
    nextCursor: string | null; // String
    prevCursor: string | null; // String
    results: Array<NexusGenRootTypes['Project'] | null>; // [Project]!
    totalCount: number | null; // Int
  }
  Query: { // field return type
    getCurrentUser: NexusGenRootTypes['User'] | null; // User
    getMyFavoriteProjects: Array<NexusGenRootTypes['ProjectsResponse'] | null>; // [ProjectsResponse]!
    getMyProjects: Array<NexusGenRootTypes['ProjectsResponse'] | null>; // [ProjectsResponse]!
    getProject: NexusGenRootTypes['Project'] | null; // Project
    getProjectsAdmin: Array<NexusGenRootTypes['ProjectsResponse'] | null>; // [ProjectsResponse]!
    getUser: NexusGenRootTypes['User'] | null; // User
    getUsers: Array<NexusGenRootTypes['User'] | null>; // [User]!
  }
  User: { // field return type
    avatar: string | null; // String
    discord: string | null; // String
    email: string | null; // String
    favoriteProjects: NexusGenRootTypes['Project'] | null; // Project
    github: string | null; // String
    id: string | null; // ID
    name: string | null; // String
    projects: NexusGenRootTypes['Project'] | null; // Project
    projectsLiked: NexusGenRootTypes['Project'] | null; // Project
    role: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createProject: 'Project'
    deleteManyProjects: 'JSONObject'
    deleteProject: 'String'
    favoriteProject: 'Project'
    login: 'JSONObject'
    reactToProject: 'Project'
    signup: 'JSONObject'
    updateProject: 'Project'
    updateUser: 'User'
  }
  Project: { // field return type name
    author: 'User'
    createdAt: 'DateTime'
    description: 'String'
    favorites: 'User'
    id: 'ID'
    isApproved: 'Boolean'
    likes: 'User'
    preview: 'String'
    repoLink: 'String'
    siteLink: 'String'
    tags: 'String'
    title: 'String'
  }
  ProjectsResponse: { // field return type name
    nextCursor: 'String'
    prevCursor: 'String'
    results: 'Project'
    totalCount: 'Int'
  }
  Query: { // field return type name
    getCurrentUser: 'User'
    getMyFavoriteProjects: 'ProjectsResponse'
    getMyProjects: 'ProjectsResponse'
    getProject: 'Project'
    getProjectsAdmin: 'ProjectsResponse'
    getUser: 'User'
    getUsers: 'User'
  }
  User: { // field return type name
    avatar: 'String'
    discord: 'String'
    email: 'String'
    favoriteProjects: 'Project'
    github: 'String'
    id: 'ID'
    name: 'String'
    projects: 'Project'
    projectsLiked: 'Project'
    role: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createProject: { // args
      input?: NexusGenInputs['CreateProjectInput'] | null; // CreateProjectInput
    }
    deleteManyProjects: { // args
      ids: Array<string | null>; // [ID]!
    }
    deleteProject: { // args
      id: string; // ID!
    }
    favoriteProject: { // args
      input?: NexusGenInputs['FavoriteProjectInput'] | null; // FavoriteProjectInput
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    reactToProject: { // args
      input?: NexusGenInputs['ReactToProjectInput'] | null; // ReactToProjectInput
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
    updateProject: { // args
      input?: NexusGenInputs['UpdateProjectInput'] | null; // UpdateProjectInput
      projectId: string; // ID!
    }
    updateUser: { // args
      input?: NexusGenInputs['UpdateUsertInput'] | null; // UpdateUsertInput
      userId: string; // String!
    }
  }
  Query: {
    getMyFavoriteProjects: { // args
      cursor?: string | null; // String
    }
    getMyProjects: { // args
      cursor?: string | null; // String
    }
    getProject: { // args
      id: string; // ID!
    }
    getProjectsAdmin: { // args
      cursor?: string | null; // String
      isApproved: boolean; // Boolean!
    }
    getUser: { // args
      userId: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}