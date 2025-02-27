export interface Rating {
    value?: number;     
    reviews?: number;   
}

export interface Recipe {
    id: number;               
    title?: string;            
    ingredients?: string[];    
    instructions?: string[];   
    cuisine?: string;           
    time?: string;            
    image?: string;            
    author?: string;            
    date?: string;             
    comments?: number;      
    saves?: number;          
    rating?: Rating;         
    prep_time?: string;       
    cook_time?: string;       
    servings?: string;       
    description?: string;      
    printable?: boolean;    
}