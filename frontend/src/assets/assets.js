import logo from './logo.png';
import verified_icon from './verified_icon.png';
import info_icon from './info_icon.png';
import downArrow from './downarrow.png';
import profile_pic from './profilepic.png';
import groupdoctors from './groupdoctor.png';
import groupprofiles from './groupprofiles.png';
import appointment_img from './appointment_img.png';
import about_doctor from './about_doctor.jpg';
import menu_icon from './menu_icon.png';
import cross_icon from './cross_icon.png';
import contact_doctor from './contact_doctor.jpg'
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';
import doc6 from './doc6.png';
import doc7 from './doc7.png';
import doc8 from './doc8.png';
import doc9 from './doc9.png';
import doc10 from './doc10.png';
import doc11 from './doc11.png';
import doc12 from './doc12.png';
import doc13 from './doc13.png';
import doc14 from './doc14.png';
import doc15 from './doc15.png';
import Dermatologist from './Dermatologist.png';
import Gastroenterologist from './Gastroenterologist.png';
import GeneralPhysician from './General_physician.png';
import Gynecologist from './Gynecologist.png';
import Neurologist from './Neurologist.png';
import Pediatrician from './Pediatricians.png';
import upload_area from './upload_area.webp';
import upload_icon from './upload_icon.png';

export const assets = {
    logo,
    downArrow,
    profile_pic,
    groupdoctors,
    groupprofiles,
    appointment_img,
    info_icon,
    verified_icon,
    about_doctor,
    contact_doctor,
    menu_icon,
    cross_icon,
    upload_area,
    upload_icon,
};

export const SpecialityData = [
    {
        speciality: 'General Physician',
        image: GeneralPhysician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatrician
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    }
];

export const doctors=[
    {
        _id: 'doc1',
        name: 'Dr. Karrie Francois',
        image: doc1,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '7 years',
        about: 'Dr. Karrie Francois is a skilled gynecologist with 25 years of experience in womens health. She specializes in prenatal care, reproductive health, and gynecological surgery.',
        fees: '1500',
        address:{
            line1: '123 Wellness Avenue, Suite 25',
            line2: 'New York, NY 10001, USA'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Rolf Hultsch',
        image: doc2,
        speciality: 'General Physician',
        degree: 'MD',
        experience: '5 years',
        about: 'Dr. Rolf Hultsch is a general physician with 19 years of experience in primary care. He specializes in preventive care, chronic disease management, and health promotion.',
        fees: '1200',
        address:{
            line1: '456 Health Street, Suite 32',
            line2: 'Los Angeles, CA 90001, USA'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Heather Saran',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'DO',
        experience: '2 years',
        about: 'Dr. Heather Saran is a dermatologist with 7 years of experience in skin care. She specializes in medical, surgical, and cosmetic dermatology.',
        fees: '1000',
        address:{
            line1: '789 Skin Boulevard, Suite 21',
            line2: 'Chicago, IL 60001, USA'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Onyemaechi Okolotaku',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MD',
        experience: '5 years',
        about: 'Dr. Onyemaechi Okolotaku is a pediatrician with 5 years of experience in child health. She specializes in newborn care, immunizations, and child development.',
        fees: '1000',
        address:{
            line1: '123 Wellness Avenue, Suite 45',
            line2: 'New York, NY 10001, USA'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Nicole Kurnik',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '4 years',
        about: 'Dr. Nicole Kurnik is a neurologist with 9 years of experience in brain health. She specializes in stroke care, epilepsy treatment, and headache management.',
        fees: '1200',
        address:{
            line1: '456 Brain Street, Suite 23',
            line2: 'Los Angeles, CA 90001, USA'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Wilber Su',
        image: doc6,
        speciality: 'Gastroenterologist',
        degree: 'MD',
        experience: '6 years',
        about: 'Dr. Wilber Su is a gastroenterologist with 15 years of experience in digestive health. He specializes in liver disease, inflammatory bowel disease, and endoscopy.',
        fees: '1500',
        address:{
            line1: '789 Gut Boulevard, Suite 12',
            line2: 'Chicago, IL 60001, USA'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Nayan Patel',
        image: doc7,
        speciality: 'General Physician',
        degree: 'DO',
        experience: '5 years',
        about: 'Dr. Nayan Patel is a general physician with 12 years of experience in primary care. He specializes in preventive care, chronic disease management, and health promotion.',
        fees: '1200',
        address:{
            line1: '123 Health Street, Suite 32',
            line2: 'New York, NY 10001, USA'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Kristina Balangue',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '8 years',
        about: 'Dr. Kristina Balangue is a skilled gynecologist with 20 years of experience in womens health. She specializes in prenatal care, reproductive health, and gynecological surgery.',
        fees: '2000',
        address:{
            line1: '456 Wellness Avenue, Suite 25',
            line2: 'Los Angeles, CA 90001, USA'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Nima Salari',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MD',
        experience: '2 years',
        about: 'Dr. Nima Salari is a dermatologist with 8 years of experience in skin care. He specializes in medical, surgical, and cosmetic dermatology.',
        fees: '1000',
        address:{
            line1: '789 Skin Boulevard, Suite 21',
            line2: 'Chicago, IL 60001, USA'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Alfredo Fabrega',
        image: doc10,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '9 years',
        about: 'Dr. Alfredo Fabrega is a neurologist with 30 years of experience in brain health. He specializes in stroke care, epilepsy treatment, and headache management.',
        fees: '2750',
        address:{
            line1: '123 Brain Street, Suite 23',
            line2: 'New York, NY 10001, USA'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Cameron Nick',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MD',
        experience: '3 years',
        about: 'Dr. Cameron Nick is a gastroenterologist with 10 years of experience in digestive health. He specializes in liver disease, inflammatory bowel disease, and endoscopy.',
        fees: '1500',
        address:{
            line1: '456 Gut Boulevard, Suite 12',
            line2: 'Los Angeles, CA 90001, USA'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. F. David Barranco',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '10 years',
        about: 'Dr. F. David Barranco is a neurologist with 33 years of experience in brain health. He specializes in stroke care, epilepsy treatment, and headache management.',
        fees: '2750',
        address:{
            line1: '789 Brain Street, Suite 23',
            line2: 'Chicago, IL 60001, USA'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sean Marco',
        image: doc13,
        speciality: 'Gastroenterologist',
        degree: 'MD',
        experience: '4 years',
        about: 'Dr. M. Elizabeth Briden is a gastroenterologist with 12 years of experience in digestive health. He specializes in liver disease, inflammatory bowel disease, and endoscopy.',
        fees: '1500',
        address:{
            line1: '123 Gut Boulevard, Suite 12',
            line2: 'New York, NY 10001, USA'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Nina Patel-Hinkle',
        image: doc14,
        speciality: 'General Physician',
        degree: 'DO',
        experience: '6 years',
        about: 'Dr. S. Michael Lee is a general physician with 15 years of experience in primary care. She specializes in preventive care, chronic disease management, and health promotion.',
        fees: '1200',
        address:{
            line1: '456 Health Street, Suite 32',
            line2: 'Los Angeles, CA 90001, USA'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Aqsa Khan',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MD',
        experience: '4 years',
        about: 'Dr. Aqsa Khan is a dermatologist with 10 years of experience in skin care. She specializes in medical, surgical, and cosmetic dermatology.',
        fees: '1000',
        address:{
            line1: '789 Skin Boulevard, Suite 21',
            line2: 'Chicago, IL 60001, USA'
        }
    }
];